/**
 * Event Calendar Widget
 * Displays a monthly calendar with event highlighting and linking
 */

class EventCalendar {
  constructor(containerId, events) {
    this.container = document.getElementById(containerId);
    this.events = events; // Array of event objects: { date, title, url }
    this.currentDate = new Date();
    this.selectedMonth = this.currentDate.getMonth();
    this.selectedYear = this.currentDate.getFullYear();
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.container.innerHTML = '';
    const calendarHTML = this.generateCalendarHTML();
    this.container.innerHTML = calendarHTML;
  }

  generateCalendarHTML() {
    const monthName = new Date(this.selectedYear, this.selectedMonth).toLocaleString('default', { month: 'long', year: 'numeric' });
    const firstDay = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(this.selectedYear, this.selectedMonth, 0).getDate();

    let html = `
      <div class="event-calendar">
        <div class="calendar-header">
          <button class="calendar-nav-btn prev-month" aria-label="Previous month">&lt;</button>
          <h2 class="calendar-month-year">${monthName}</h2>
          <button class="calendar-nav-btn next-month" aria-label="Next month">&gt;</button>
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

    // Previous month's days (grayed out)
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      html += `<div class="calendar-day other-month">${day}</div>`;
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = this.formatDate(new Date(this.selectedYear, this.selectedMonth, day));
      const dayEvents = this.getEventsForDate(dateStr);
      const hasEvents = dayEvents.length > 0;
      const isToday = this.isToday(new Date(this.selectedYear, this.selectedMonth, day));

      html += `<div class="calendar-day ${hasEvents ? 'has-events' : ''} ${isToday ? 'today' : ''}">
        <div class="day-number">${day}</div>`;

      if (hasEvents) {
        html += `<div class="day-events">`;
        dayEvents.forEach((event, index) => {
          if (index < 2) { // Show max 2 events, truncate with ellipsis if more
            html += `<a href="${event.url}" class="event-link" title="${event.title}">${event.title}</a>`;
          }
        });
        if (dayEvents.length > 2) {
          html += `<div class="event-more">+${dayEvents.length - 2} more</div>`;
        }
        html += `</div>`;
      }

      html += `</div>`;
    }

    // Next month's days (grayed out)
    const totalCells = document.querySelectorAll('.calendar-days .calendar-day')?.length || 0;
    const remainingCells = 42 - (firstDay + daysInMonth); // 6 rows * 7 days
    for (let day = 1; day <= remainingCells; day++) {
      html += `<div class="calendar-day other-month">${day}</div>`;
    }

    html += `</div></div>`;
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

  attachEventListeners() {
    this.container.querySelector('.prev-month')?.addEventListener('click', () => this.previousMonth());
    this.container.querySelector('.next-month')?.addEventListener('click', () => this.nextMonth());
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
}

// Initialize calendar when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const calendarContainer = document.getElementById('event-calendar');
  if (calendarContainer && window.eventData) {
    new EventCalendar('event-calendar', window.eventData);
  }
});
