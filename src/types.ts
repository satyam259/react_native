import { DrawerNavigationProp } from '@react-navigation/drawer';

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type DrawerNavigationProps<T extends keyof DrawerParamList> = {
  navigation: DrawerNavigationProp<DrawerParamList, T>;
};