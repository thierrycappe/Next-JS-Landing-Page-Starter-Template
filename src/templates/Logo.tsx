import Image from 'next/image';

import logolight from '@/public/assets/images/logo-light.png';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image
        src={logolight}
        alt="localyon.com logo light"
        style={{
          width: '30%',
          height: 'auto',
        }}
      />
    </span>
  );
};

export { Logo };
