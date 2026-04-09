import { Router } from "express";
import swaggerUi from 'swagger-ui-express';
import { generateOpenApiDocs } from "../utils/swagger";


const router = Router();

if (process.env.NODE_ENV != "production") {
  const swaggerDocs = generateOpenApiDocs();

  router.get('/v2/docs-json', (req, res) => {
    res.json(generateOpenApiDocs());
  });

  router.use('/v2/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
  
  router.get("/v2/health", (req, res) => {
    res.status(200).json({
      status: "available"
    })
  });

  console.log('🛠  Dev mode: Docs available at /api/v2/docs');
}

export const v2Router = router;