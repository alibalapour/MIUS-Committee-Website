/**
 * Event Calendar Widget
 * Displays a monthly calendar with event highlighting and linking
 */

class EventCalendar {
  constructor(containerId, events) {
    this.container = document.getElementById(containerId);
    this.events = events || [];

    const firstEventDate = this.getFirstUpcomingEventDate();

    if (firstEventDate) {
      this.currentDate = firstEventDate;
    } else {
      this.currentDate = new Date();
    }

    this.selectedMonth = this.currentDate.getMonth();
    this.selectedYear = this.currentDate.getFullYear();

    if (!this.container) return;

    this.render();
  }

  getFirstUpcomingEventDate() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingEvents = this.events
      .map(event => new Date(event.date + 'T00:00:00'))
      .filter(date => date >= today)
      .sort((a, b) => a - b);

    return upcomingEvents.length ? upcomingEvents[0] : null;
  }

  render() {
    this.container.innerHTML = this.generateCalendarHTML();
    this.attachEventListeners();
  }

  generateCalendarHTML() {
    const monthName = new Date(this.selectedYear, this.selectedMonth).toLocaleString('default', {
      month: 'long',
      year: 'numeric'
    });

    const firstDay = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    const remainingCells = 42 - (firstDay + daysInMonth);

    let html = `
      <div class="event-calendar">
        <div class="calendar-header">
          <button class="calendar-nav-btn prev-month" type="button" aria-label="Previous month">&lt;</button>
          <h2 class="calendar-month-year">${monthName}</h2>
          <button class="calendar-nav-btn next-month" type="button" aria-label="Next month">&gt;</button>
        </div>

        <div class="calendar-weekdays">
          <div class="weekday">Sun</div>
          <div class="weekday">Mon</div>
          <div class="weekday">Tue</div>
          <div class="weekday">Wed</div>
          <div class="weekday">Thu</div>
          <div class="weekday">Fri</div>
          <div class="weekday">Sat</div>
        </div>

        <div class="calendar-days">
    `;

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      html += `<div class="calendar-day other-month"><span class="day-number">${day}</span></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = this.formatDate(new Date(this.selectedYear, this.selectedMonth, day));
      const dayEvents = this.getEventsForDate(dateStr);
      const hasEvents = dayEvents.length > 0;
      const isToday = this.isToday(new Date(this.selectedYear, this.selectedMonth, day));

      html += `
        <div class="calendar-day ${hasEvents ? 'has-events' : ''} ${isToday ? 'today' : ''}">
          <div class="day-number">${day}</div>
      `;

      if (hasEvents) {
        html += `<div class="day-events">`;

        dayEvents.forEach((event, index) => {
          if (index < 3) {
            html += `
              <a href="${event.url}" class="event-link" title="${this.escapeHTML(event.title)}">
                ${this.escapeHTML(event.title)}
              </a>
            `;
          }
        });

        if (dayEvents.length > 3) {
          html += `<div class="event-more">+${dayEvents.length - 3} more</div>`;
        }

        html += `</div>`;
      }

      html += `</div>`;
    }

    for (let day = 1; day <= remainingCells; day++) {
      html += `<div class="calendar-day other-month"><span class="day-number">${day}</span></div>`;
    }

    html += `
        </div>
      </div>
    `;

    return html;
  }

  getEventsForDate(dateStr) {
    return this.events.filter(event => event.date === dateStr);
  }

  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  isToday(date) {
    const today = new Date();

    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  previousMonth() {
    this.selectedMonth--;

    if (this.selectedMonth < 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    }

    this.render();
  }

  nextMonth() {
    this.selectedMonth++;

    if (this.selectedMonth > 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    }

    this.render();
  }

  attachEventListeners() {
    const previousButton = this.container.querySelector('.prev-month');
    const nextButton = this.container.querySelector('.next-month');

    if (previousButton) {
      previousButton.addEventListener('click', () => this.previousMonth());
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => this.nextMonth());
    }
  }

  escapeHTML(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const calendarContainer = document.getElementById('event-calendar');

  if (calendarContainer && window.eventData) {
    new EventCalendar('event-calendar', window.eventData);
  }
});
