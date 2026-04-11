import { Router } from "express";
import swaggerUi from 'swagger-ui-express';
import { generateOpenApiDocs } from "../utils/swagger";
import { userRouter } from "./user.router";
import { authRouter } from "./auth.router";


const router = Router();

if (process.env.NODE_ENV != "production") {
  const swaggerDocs = generateOpenApiDocs();

  router.get('/v2/docs-json', (req, res) => {
    res.json(generateOpenApiDocs());
  });

  router.use('/v2/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
  
}

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "available"
  })
});

router.use("/users", userRouter)
router.use("/auth", authRouter)

export const v2Router = router;