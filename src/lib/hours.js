/**
 * Business hours config and open/closed status for Urbano Cafe (Dallas, TX).
 * Single source of truth: 5pm to midnight, seven days a week, America/Chicago.
 */

export const hoursConfig = {
  timezone: 'America/Chicago',
  openHour: 17, // 5pm
  closeHour: 0, // midnight
}

/**
 * Returns whether the restaurant is open at the given date in the config timezone,
 * if it's closing or opening within the next hour, and a display label.
 * @param {Date} date - The moment to check (typically new Date()).
 * @param {{ timezone: string, openHour: number, closeHour: number }} [config] - Optional config (defaults to hoursConfig).
 * @returns {{ isOpen: boolean, closingSoon: boolean, openingSoon: boolean, label: string }}
 */
export function getOpenStatus(date, config = hoursConfig) {
  const { timezone, openHour, closeHour } = config
  const hourStr = date.toLocaleString('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    hour12: false,
  })
  const hour = Number.parseInt(hourStr, 10)
  // Open from openHour (17) through 23; closed from 0 through openHour-1 (16)
  const isOpen = closeHour === 0 ? hour >= openHour : (hour >= openHour && hour < closeHour)
  // Opening soon = closed but within 1 hour of open (e.g. 4pm when opening at 5pm).
  const openingSoon = !isOpen && hour === openHour - 1
  // Closing soon = within 1 hour of close. Close at midnight (0) means hour 23 is closing soon.
  const closingSoon =
    isOpen &&
    (closeHour === 0 ? hour >= 23 : hour >= closeHour - 1)
  const label = openingSoon
    ? 'Opening soon'
    : !isOpen
      ? 'Closed now'
      : closingSoon
        ? 'Closing soon'
        : 'Open now'
  return {
    isOpen,
    closingSoon,
    openingSoon,
    label,
  }
}
