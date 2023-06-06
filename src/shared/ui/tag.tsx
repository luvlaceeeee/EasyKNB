import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../helpers';

const tagVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold transition-colors',
  {
    variants: {
      bg: {
        default: 'bg-primary',
        green: 'bg-greenTag hover:bg-greenTag/80 text-white',
        greenDark: 'bg-greenTag-dark hover:bg-greenTag-dark/80 text-white',
        greenLight: 'bg-greenTag-light hover:bg-greenTag-light/80 text-black',
        yellow: 'bg-yellowTag hover:bg-yellowTag/80 text-white',
        yellowDark: 'bg-yellowTag-dark hover:bg-yellowTag-dark/80 text-white',
        yellowLight:
          'bg-yellowTag-light hover:bg-yellowTag-light/80 text-black',
        orange: 'bg-orangeTag hover:bg-orangeTag/80 text-white',
        orangeDark: 'bg-orangeTag-dark hover:bg-orangeTag-dark/80 text-white',
        orangeLight:
          'bg-orangeTag-light hover:bg-orangeTag-light/80 text-black',
        red: 'bg-redTag hover:bg-redTag/80 text-white',
        redDark: 'bg-redTag-dark hover:bg-redTag-dark/80 text-white',
        redLight: 'bg-redTag-light hover:bg-redTag-light/80 text-black',
        violet: 'bg-violetTag hover:bg-violetTag/80 text-white',
        violetDark: 'bg-violetTag-dark hover:bg-violetTag-dark/80 text-white',
        violetLight:
          'bg-violetTag-light hover:bg-violetTag-light/80 text-black',
        blue: 'bg-blueTag hover:bg-blueTag/80 text-white',
        blueDark: 'bg-blueTag-dark hover:bg-blueTag-dark/80 text-white',
        blueLight: 'bg-blueTag-light hover:bg-blueTag-light/80 text-black',
        oceanic: 'bg-oceanicTag hover:bg-oceanicTag/80 text-white',
        oceanicDark:
          'bg-oceanicTag-dark hover:bg-oceanicTag-dark/80 text-white',
        oceanicLight:
          'bg-oceanicTag-light hover:bg-oceanicTag-light/80 text-black',
        lime: 'bg-limeTag hover:bg-limeTag/80 text-white',
        limeDark: 'bg-limeTag-dark hover:bg-limeTag-dark/80 text-white',
        limeLight: 'bg-limeTag-light hover:bg-limeTag-light/80 text-black',
        pink: 'bg-pinkTag hover:bg-pinkTag/80 text-white',
        pinkDark: 'bg-pinkTag-dark hover:bg-pinkTag-dark/80 text-white',
        pinkLight: 'bg-pinkTag-light hover:bg-pinkTag-light/80 text-black',
        gray: 'bg-pinkTag hover:bg-pinkTag/80 text-white',
        grayDark: 'bg-pinkTag-dark hover:bg-pinkTag-dark/80 text-white',
        grayLight: 'bg-pinkTag-light hover:bg-pinkTag-light/80 text-black',
      },
    },
    defaultVariants: {
      bg: 'default',
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

function Tag({ className, bg, ...props }: TagProps) {
  return <div className={cn(tagVariants({ bg }), className)} {...props} />;
}

export { Tag, tagVariants };
