# What is this?

Get airthmetic operations done with simply passing arguments

# Installation

`npm i calculator-jtc --save`

Then...

```
import { calculator } from 'calculator-jtc';

calculator({
    num1: 5,
    num2: 4,
    operation:'+'
});

will log into console - 9
```

## Options

calculator supports 3 options, all are mandatory:

* *num1* - intrger | float
* *num2* - intrger | float
* *operation* - arithmetic operation (+, -, *, /)
