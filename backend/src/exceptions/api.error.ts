export class ApiError extends Error {
  status: number;
  errors: any;

  constructor(status: number, message: string, errors: any = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, "Пользователь не авторизован.");
  }

  static InternalServer() {
    return new ApiError(500, "Internal server error");
  }

  static AccessError() {
    return new ApiError(403, "У вас нет доступа.");
  }

  static BadRequest(message: string, errors: any = []) {
    return new ApiError(400, message, errors);
  }

  static Forbidden(message: string = "Доступ запрещен.") {
    return new ApiError(403, message);
  }
}
