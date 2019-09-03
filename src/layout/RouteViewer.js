import React from "react";
import { renderRoutes } from "react-router-config";

const RouteViewer = ({ route }) => <div>{renderRoutes(route.routes)}</div>;

export default RouteViewer;
