import "bootstrap/dist/css/bootstrap.min.css";
import { run } from "./app/app";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
import "./main.css";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);
