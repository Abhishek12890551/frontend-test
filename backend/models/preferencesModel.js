import mongoose from "mongoose";

const widgetSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  position: {
    x: {
      type: Number,
      required: true,
      default: 0,
    },
    y: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  size: {
    width: {
      type: Number,
      required: true,
      default: 1,
    },
    height: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  visible: {
    type: Boolean,
    default: true,
  },
});

const preferencesSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    theme: {
      type: String,
      enum: ["light", "dark", "auto"],
      default: "light",
    },
    dashboardLayout: {
      sidebarCollapsed: {
        type: Boolean,
        default: false,
      },
      gridSize: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium",
      },
      widgets: [widgetSchema],
    },
    notifications: {
      email: {
        type: Boolean,
        default: true,
      },
      push: {
        type: Boolean,
        default: true,
      },
      desktop: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Preferences = mongoose.model("Preferences", preferencesSchema);

export default Preferences;
