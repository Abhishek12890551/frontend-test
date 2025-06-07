import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.min": "Name must be at least 2 characters long",
    "string.max": "Name cannot exceed 50 characters",
    "any.required": "Name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "any.required": "Password is required",
  }),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
});

export const updateProfileSchema = Joi.object({
  name: Joi.string().min(2).max(50).optional().messages({
    "string.min": "Name must be at least 2 characters long",
    "string.max": "Name cannot exceed 50 characters",
  }),
  email: Joi.string().email().optional().messages({
    "string.email": "Please provide a valid email address",
  }),
});

export const preferencesSchema = Joi.object({
  theme: Joi.string().valid("light", "dark", "auto").default("light").messages({
    "any.only": "Theme must be one of: light, dark, auto",
  }),
  dashboardLayout: Joi.object({
    sidebarCollapsed: Joi.boolean().default(false),
    gridSize: Joi.string().valid("small", "medium", "large").default("medium"),
    widgets: Joi.array()
      .items(
        Joi.object({
          id: Joi.string().required(),
          position: Joi.object({
            x: Joi.number().required(),
            y: Joi.number().required(),
          }).required(),
          size: Joi.object({
            width: Joi.number().required(),
            height: Joi.number().required(),
          }).required(),
          visible: Joi.boolean().default(true),
        })
      )
      .default([]),
  }).default({}),
  notifications: Joi.object({
    email: Joi.boolean().default(true),
    push: Joi.boolean().default(true),
    desktop: Joi.boolean().default(false),
  }).default({}),
});

export const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message,
      }));

      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors,
      });
    }

    req.validatedBody = value;
    next();
  };
};
