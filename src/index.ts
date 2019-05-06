import "./common/themes/index.less";

import KOS from "kos-core";

import createLogger from "redux-logger";
import createLoading from "./common/middlewares/kos-loading";
import Router from "./router";

KOS.use(createLogger);
KOS.use(createLoading);

KOS.start(Router, "#root");
