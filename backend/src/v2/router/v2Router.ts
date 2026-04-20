import { Router } from "express";
import swaggerUi from 'swagger-ui-express';
import { generateOpenApiDocs } from "../utils/swagger";
import { userRouter } from "./user.router";
import { authRouter } from "./auth.router";
import { marketplaceRouter } from "./marketplace.router";
import { raceRouter } from "./race.router";


const router = Router();

if (process.env.NODE_ENV != "production") {
  const swaggerDocs = generateOpenApiDocs();

  router.get('/docs-json', (req, res) => {
    res.json(generateOpenApiDocs());
  });

  router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
  
}

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "available"
  })
});

router.use("/users", userRouter)
router.use("/auth", authRouter)
router.use("/marketplace", marketplaceRouter)
router.use("/races", raceRouter)

export const v2Router = router;