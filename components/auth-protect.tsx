import { observer } from "mobx-react";
import React, { memo } from "react";
import { useInstance } from "react-ioc";
import { UserService } from "../services/user.service";
import LoginDialog from "./login-dialog";

const AuthProtect = ({
  children,
}: {
  children: any;
}) => {
  const userService = useInstance(UserService);
  React.useEffect(() => {
    userService.askToLogIn = true;
    return () => {
      userService.askToLogIn = false;
    };
  }, []);

  return <>
    {!userService.user || userService.loading ? null : children}

    <LoginDialog active={userService.isOpenLoginDialog}/>
  </>;
};

export default memo(observer(AuthProtect));
