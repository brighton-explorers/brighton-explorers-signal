/**
 * Enable PPI-revealing debug information in logs
 */
export const DEBUG = process.env.DEBUG === "true";

/**
 * Enable non-PPI-revealing debug information in logs
 */
export const TRACE = process.env.TRACE === "true";

/**
 * Don't actually make changes
 */
export const DRY_RUN = process.env.DRY_RUN === "true";
