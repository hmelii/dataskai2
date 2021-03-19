import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: any): string {
    if (value && typeof value === 'number') {
      // Gets the value as a string
      if (typeof value !== 'string') {
        value = value.toString();
      }
      // Delete existing spaces
      while ((value as string).indexOf(' ') !== -1) {
        value = (value as string).replace(' ', '');
      }

      // Manage decimal values
      let integerPart: string = value;
      if (value.indexOf('.') !== -1) {
        integerPart = value.slice(0, value.indexOf('.'));
      }
      if (value.indexOf(',') !== -1) {
        integerPart = value.slice(0, value.indexOf(','));
      }

      let firstSlice = true;
      const arrayResults: Array<string> = [];
      let finalResult = '';

      const divisor = 3;
      const dividend: number = integerPart.length;
      let remainder = dividend % divisor;
      let quotient = (dividend + remainder) / divisor;

      if (dividend >= 3) {
        do {
          if (firstSlice && remainder > 0) {
            // Manage numbers with remainders
            firstSlice = false;
            arrayResults.push(integerPart.slice(0, remainder));
          } else {
            // Slice each part of the number to an array
            firstSlice = false;
            arrayResults.push(
              integerPart.slice(remainder, remainder + divisor)
            );
            remainder = remainder + divisor;
            quotient--;
          }
          // Continue dividing the number while there are values
        } while (quotient >= 1);

        // Concats the sliced parts to build the final number
        arrayResults.forEach((part) => {
          finalResult += `${part} `;
        });
        // Delete any trailing whitespace
        finalResult = finalResult.trim();
        return finalResult;
      } else {
        return value;
      }
    }
    return value;
  }
}
