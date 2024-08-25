import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export const tokenInterceptorsInterceptor: HttpInterceptor = (req, next) => {
  return next(req);
};
