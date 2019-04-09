# Dice

## Contents
* [Summary](#summary)
* [Methods](#methods)

## Summary
`Dice` is a module that provides helper functions to simulate various 
dice types used in tabletop games. 

## Methods
| **roll**( maxValue:```integer```, quantity:```integer```=1 ):```integer/array```       |
| :---------------------------------------------------------------------------- |
| Returns a random integer from 1 to the specified `maxValue`. If a `quantity` is supplied, an array of these random values will be provided with the same length as `quantity`|

| **d4**(quantity:```integer```=1 ):```integer/array```       |
| :---------------------------------------------------------------------------- |
| Returns a random integer from **1 to 4**. If a `quantity` is supplied, an array of these random values will be provided with the same length as `quantity`|

| **d6**(quantity:```integer```=1 ):```integer/array```       |
| :---------------------------------------------------------------------------- |
| Returns a random integer from **1 to 6**. If a `quantity` is supplied, an array of these random values will be provided with the same length as `quantity`|

| **d8**(quantity:```integer```=1 ):```integer/array```       |
| :---------------------------------------------------------------------------- |
| Returns a random integer from **1 to 8**. If a `quantity` is supplied, an array of these random values will be provided with the same length as `quantity`|

| **d10**(quantity:```integer```=1 ):```integer/array```       |
| :---------------------------------------------------------------------------- |
| Returns a random integer from **1 to 10**. If a `quantity` is supplied, an array of these random values will be provided with the same length as `quantity`|

| **d12**(quantity:```integer```=1 ):```integer/array```       |
| :---------------------------------------------------------------------------- |
| Returns a random integer from **1 to 12**. If a `quantity` is supplied, an array of these random values will be provided with the same length as `quantity`|

| **d20**(quantity:```integer```=1 ):```integer/array```       |
| :---------------------------------------------------------------------------- |
| Returns a random integer from **1 to 20**. If a `quantity` is supplied, an array of these random values will be provided with the same length as `quantity`|

| **percentage**(quantity:```integer```=1 ):```integer/array```       |
| :---------------------------------------------------------------------------- |
| Returns a random integer from **1 to 100**. If a `quantity` is supplied, an array of these random values will be provided with the same length as `quantity`|

| **advantage**():```object```       |
| :---------------------------------------------------------------------------- |
| Returns an object with two properties: `value` & `rolls`. `rolls` is an array of two random integers from **1 to 20** (d20). `value` is an integer equal to the higher of the two numbers in the `rolls` array.|

| **disadvantage**():```object```       |
| :---------------------------------------------------------------------------- |
| Returns an object with two properties: `value` & `rolls`. `rolls` is an array of two random integers from **1 to 20** (d20). `value` is an integer equal to the lower of the two numbers in the `rolls` array.|
