// import { useSelector } from 'react-redux';
import getTheme from './getTheme';

export function useTheme() {
  // const themeSlice = useSelector((state) => state.theme);
  // const myStoresSlices = useSelector((state) => state.myStores);
  // const userSlice = useSelector((state) => state.user);
  // const { storeSelected } = myStoresSlices;

  const mode = "dark";

  let theme = getTheme(mode);

  // const storeBrand =
  //   storeSelected?.store_brand ||
  //   userSlice.user.store_managers_info?.store?.store_brand ||
  //   userSlice.user?.store_employees_info?.store_branch?.store?.store_brand;

  // const brandPrimary = storeBrand?.cl_primary;
  // const brandSecondary = storeBrand?.cl_secondary;
  // const brandActive = storeBrand?.cl_active;

  // theme.colors = {
  //   ...theme.colors,
  //   brand_primary: (brandPrimary && brandPrimary) || theme.colors.primary1,
  //   brand_secondary:
  //     (brandSecondary && brandSecondary) || theme.colors.primary2,
  //   brand_active: (brandActive && brandActive) || theme.colors.primary3,
  // };
  // theme.brand = storeBrand;

  return theme;
}