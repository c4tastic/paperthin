import { html, LitElement, customElement, css } from 'lit-element'
import { WITH_CHILDREN_TAG_NAME } from './Example.models'

@customElement(WITH_CHILDREN_TAG_NAME)
export class ExampleWithChildren extends LitElement {
  static styles = css`
    :host {
      border: 1px solid #222;
      padding: 0.5rem;
    }
  `
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return html`<slot></slot> <slot name="emoji"></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    readonly [WITH_CHILDREN_TAG_NAME]: ExampleWithChildren
  }
}
