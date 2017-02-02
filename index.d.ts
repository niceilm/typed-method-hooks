/**
 * @link https://github.com/leonidez/method-hooks
 */

interface BeforeHook {
  (methodArgs: any, methodOptions: ValidatedMethodOption): any;
}

interface AfterHook {
  (methodArgs: any, returnValue: any, methodOptions: ValidatedMethodOption): any;
}

interface ValidatedMethodOption {
  beforeHooks?: BeforeHook[];
  afterHooks?: AfterHook[];
}

declare module 'meteor/lacosta:method-hooks' {
  export let MethodHooks: any;
}
