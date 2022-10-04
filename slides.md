A quick example set of slides

---

Checkout `slides.md` to see how they were written.

---

## Navigate vertically

Grouping tabs vertically is a good way to discuss a single idea

_hint: press <kbd>↓</kdb>_<!-- .element: class="small" -->

--

This slide appears below the first slide

_hint: press <kbd>→</kdb>_<!-- .element: class="small" -->

---

## Navigate horizontally

This slide appears to the right of the first slide

---

Go Big<!-- .element: class="r-fit-text" -->

---

Press <kbd>ESC</kbd> to see overview

--

Press <kbd>S</kbd> to open speaker view.

You can even include notes that only the presenter can see!

<!-- Presenter notes are specified by anything written below a line that starts with "NOTE: " -->

NOTE: This is only visible to the presenter.

Drag this tab to a different window or screenshare the other tab. When you change slides on this presenter-view tab, the other tab with audience focused tabs will change as well.

--

Press <kbd>?</kbd> to see other keyboard shortcuts.

---

## Fragment transitions

Fade in <!-- .element: class="fragment" -->

Fade out <!-- .element: class="fragment fade-out" -->

Highlight red <!-- .element: class="fragment highlight-red" -->

Fade in, then out <!-- .element: class="fragment fade-in-then-out" -->

Slide up while fading in <!-- .element: class="fragment fade-up" -->

NOTE: See more about fragment transitions here: https://revealjs.com/fragments/

---

<!-- .slide: data-auto-animate -->

## Code

```js[|4|4,8-9|15,19-20]
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function SecondExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---


<!-- .slide: data-background-image="https://placekitten.com/1000/1000" -->

## Backgrounds

Images as backgrounds

NOTE: Could be relative path to images as well...

--

<!-- .slide: data-background-iframe="https://semver.org" data-background-interactive -->

## Backgrounds

Websites as backgrounds

NOTE: This doesn't currently work with any page that prevents itself from being included in iframes (e.g. GitHub)