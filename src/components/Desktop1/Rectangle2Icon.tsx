import { memo, SVGProps } from 'react';

const Rectangle2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1440V100H0V0Z' fill='url(#paint0_linear_28_2)' />
    <defs>
      <linearGradient id='paint0_linear_28_2' x1={720} y1={0} x2={720} y2={100} gradientUnits='userSpaceOnUse'>
        <stop stopColor='white' stopOpacity={0} />
        <stop offset={0.875} stopColor='#FBDBDB' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Rectangle2Icon);
export { Memo as Rectangle2Icon };
