// 중단점
const deviceSizes = {
  iphone: '375px',
  mobile: '639px',
  desktop: '640px',
};

const device = {
  iphone: `(max-width: ${deviceSizes.iphone})`,
  mobile: `(max-width: ${deviceSizes.mobile})`,
  desktop: `(min-width: ${deviceSizes.desktop})`,
};

const theme = {
  deviceSizes,
  device,
};

export default theme;
