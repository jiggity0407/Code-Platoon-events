function windCalulator(direction, runway, winds) {

const degreesOff = direction - runway

    const header = "Headwind = ";
    let angleInDegrees = direction - runway;
    let angleInRadians = angleInDegrees * (Math.PI / 180);
    let cosineValue = Math.cos(angleInRadians);
    let headWind = Math.abs(winds * cosineValue);

    const crosser = "Crosswind = ";
    let angleInDegreesCw = direction - runway;
    let angleInRadiansCw = angleInDegreesCw * (Math.PI / 180);
    let cosineValueCw = Math.sin(angleInRadiansCw);
    let crossWindCw = Math.abs(winds * cosineValueCw);

    const tail = "Tailwind = ";
    let angleInDegreesTw = direction - runway;
    let angleInRadiansTw = angleInDegreesTw * (Math.PI / 180);
    let cosineValueTw = Math.cos(angleInRadiansTw);
    let crossWindTw = Math.abs(winds * cosineValueTw);

    if (degreesOff == 0) {
        return (`${header}`) + Math.floor(headWind);

    } else if (degreesOff >= 30 && degreesOff <= 60) {
        return (`${crosser}`) + Math.floor(crossWindCw) + " " + '\n' + (`${header}`) + Math.floor(headWind);

    } else if (degreesOff > 60 || degreesOff <= 180) {
        return (`${crosser}`) + Math.floor(crossWindCw) + " " + '\n' + (`${tail}`) + Math.floor(crossWindTw);
    }

  return "no winds";
  }
console.log(windCalulator(100, 80, 20));

