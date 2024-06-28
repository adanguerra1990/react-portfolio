import { keyframes } from "@emotion/react";

const animationUP = keyframes`
        from {
            opacity: 0;
            transform: translateY(-10%);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
     `
const animationDown = keyframes`
        from {
            opacity: 0;
            transform: translateY(10%);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
     `

const animationLeft = keyframes`
          from {
               transform: translateX(-10%);
               opacity: 0;
          }
          to {
               transform: translateX(0%);
               opacity: 1;
          }
     `
const animationRight = keyframes`
          from {
               transform: translateX(10%);
               opacity: 0;
          }
          to {
               transform: translateX(0%);
               opacity: 1;
          }
     `



const animationFoooterUp = keyframes`
          from {
               transform: translateY(-30%);
               opacity: 0;
          }
          to {
               transform: translateY(0%);
               opacity: 1;
          }
     `

export {
     animationLeft,
     animationRight,
     animationUP,
     animationFoooterUp,
     animationDown
}