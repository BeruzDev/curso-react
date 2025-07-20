import { EVENTS } from '../consts/consts.js'

export function navigate(href) {
  window.history.pushState({}, '', href)

  // Make new custom event
  const navigationEvent = new Event(EVENTS.PUSHSTATE) // <-- Create an event to listen for pushstate changes
  window.dispatchEvent(navigationEvent) // <-- Dispatch the event for any listener
}

const Link = ({ target, to, ...props }) => {
  const handleClick = (event) => {
		const isMainEvent = event.button === 0 // <-- primary click (left click)
		const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey // <- ctrl/shift + click
		const isManageableEvent = target === undefined || target === '_self'

		if( isMainEvent && isManageableEvent && !isModifiedEvent){
			event.preventDefault()
			navigate(to)
		}
	}

  return <a onClick={handleClick} href={to} target={target} {...props} />
}

export default Link
