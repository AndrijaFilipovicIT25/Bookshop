import gsap from "gsap";

export default class BookTransitionService {

 static animateOpen({
  floatingElement,
  fromRect,
  onSpawned,
  onComplete,
}) {

  gsap.set(floatingElement, {

    left: fromRect.left,
    top: fromRect.top,

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

        left: "22vw",
        top: "50%",

        yPercent: -50,

        scale: 1.8,

        duration: 0.55,

        ease: "power3.out",

        onComplete,
      });

    });

  });

}

 static animateClose({
  floatingElement,
  toRect,
  onBeforeReturn,
  onArrived,
  onComplete,
}) {

  requestAnimationFrame(() => {

    if (onBeforeReturn) {
      onBeforeReturn();
    }

    requestAnimationFrame(() => {

      gsap.to(floatingElement, {

        left: toRect.left,
        top: toRect.top,

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