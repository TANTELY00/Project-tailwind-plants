/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},


    // pour container
    container : {
      center : true,
      padding : {
        DEFAULT : "12px",
        md : "32px"
      }
    },

    // pour l'écran
    screens:{
      sm : "340px",
      md : "540px",
      lg : "768px",
      xl : "1180px"
    },

    //pour le fonts 
    fontFamily:{
      Ubuntu : ["Ubuntu", "sans-serif"]
    },

    // pour l'annimations
    keyframes:{
      move : {
        "50%" : {transform : "translateY(-1rem)"}
      },
      rotate : {
        "0%" : {transform : "rotate(0deg)"},
        "100%" : {transform : "rotate(360deg)"}
      },
      scaleUp :{
        "0%" : {transform : "scale(0.8)"},
        "50%" : {transform : "scale(1.2)"},
        "100%" : {transform : "scale(0.8)"},
      }
    },
    animation:{
      movingY : "move 3s linear infinite",
      ratating :" rotate 15s linear infinite",
      sclalingUp : "scaleUp 3s linear infinite"
    }

  },
  plugins: [],
}
