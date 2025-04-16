import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dropdown"]

  connect() {
    this.isOpen = false
  }

  toggle(event) {
    event.preventDefault()
    this.dropdownTarget.classList.remove("slide-out")
    this.dropdownTarget.classList.add("slide-in")
    this.isOpen = true
  }

  close(event) {
    event.preventDefault()
    this.dropdownTarget.classList.remove("slide-in")
    this.dropdownTarget.classList.add("slide-out")
    this.isOpen = false
  }

  outsideClick(event) {
    if (
      this.isOpen &&
      !this.dropdownTarget.contains(event.target) &&
      !event.target.closest("[data-action*='filter#toggle']")
    ) {
      this.close(event)
    }
  }
}
