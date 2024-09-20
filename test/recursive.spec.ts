import { findFactorialIterative , findFactorialRecursive } from "../src/algo/recursive/factorial"
import {fibonacciRecursive,fibonacciIterative} from '../src/algo/recursive/fibonacci'

describe("deve testar a recursividade", () => {
  test("fatorial", () => {
    console.log(findFactorialRecursive(6))
  })

  test("fibonacci", () => {
    console.log(fibonacciRecursive(8))
    console.log(fibonacciIterative(3))
  })
})
