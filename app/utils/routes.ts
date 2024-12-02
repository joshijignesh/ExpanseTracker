/**
 * Added this type for mapping it to Navigation.
 */
export type RootParamList = {
    SCREEN_LOADING: undefined
    SCREEN_MAIN: undefined;
    SCREEN_AUTH: undefined;
    SCREEN_LOGIN: undefined;
    SCREEN_HOME: undefined;
    SCREEN_ADD_EXPANSE: undefined;
    SCREEN_PREFERENCES: undefined;
    SCREEN_STATISCTICS: undefined;
    SCREEN_SIGN_UP: undefined;
  };

export const routes: Record<keyof RootParamList, string> = {
    SCREEN_LOADING :"loading_screen",
    SCREEN_AUTH: "auth_screen",
    SCREEN_MAIN: "main_screen",

    SCREEN_LOGIN: 'login_screen',
    SCREEN_HOME: 'home_screen',
    SCREEN_ADD_EXPANSE: 'screen_add_expanse',
    SCREEN_PREFERENCES: 'screen_preferences',
    SCREEN_STATISCTICS: 'screen_statistics',
    SCREEN_SIGN_UP: 'screen_sign_up',
}