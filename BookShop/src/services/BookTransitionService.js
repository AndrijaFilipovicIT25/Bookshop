import gsap from "gsap";

export default class BookTransitionService {

 static animateOpen({
  floatingElement,
  fromRect,
  toRect,
  onSpawned,
  onComplete,
}) {

  gsap.set(floatingElement, {

    left: fromRect.left,
    top: fromRect.top,
    width: fromRect.width,
    height: fromRect.height,

    yPercent: 0,

    scale: 1,

    opacity: 1,

    transformOrigin: "center center",
  });

  requestAnimationFrame(() => {

    if (onSpawned) {
      onSpawned();
    }

    requestAnimationFrame(() => {

      gsap.to(floatingElement, {

        left: toRect.left,
        top: toRect.top,
        width: toRect.width,
        height: toRect.height,

        yPercent: 0,

        scale: 1,

        duration: 0.55,

        ease: "power3.out",

        onComplete,
      });

    });

  });

}

 static animateClose({
  floatingElement,
  fromRect,
  toRect,
  onBeforeReturn,
  onArrived,
  onComplete,
}) {

  gsap.set(floatingElement, {

    left: fromRect.left,
    top: fromRect.top,
    width: fromRect.width,
    height: fromRect.height,

    yPercent: 0,

    scale: 1,

    opacity: 1,

    transformOrigin: "center center",
  });

  requestAnimationFrame(() => {

    if (onBeforeReturn) {
      onBeforeReturn();
    }

    requestAnimationFrame(() => {

      gsap.to(floatingElement, {

        left: toRect.left,
        top: toRect.top,
        width: toRect.width,
        height: toRect.height,

        yPercent: 0,

        scale: 1,

        duration: 0.55,

        ease: "power3.inOut",

        onComplete: () => {

          if (onArrived) {
            onArrived();
          }

          requestAnimationFrame(() => {

            if (onComplete) {
              onComplete();
            }

          });

        },

      });

    });

  });

}

}
