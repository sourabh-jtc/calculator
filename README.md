# What is this?

Get perfect shadows every time for the non-designer.

# Installation

`npm i calculator --save`

Then...

```
import { calculator } from 'calculator';

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