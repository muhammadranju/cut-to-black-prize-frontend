import { z } from "zod"

export const invitationCodeSchema = z.object({
  code: z
    .string()
    .min(1, "Invitation code required")
    .regex(/^[a-zA-Z0-9]+$/, "Must be alphanumeric"),
  acceptTerms: z.boolean().refine((val) => val === true, "You must accept the terms and conditions"),
})

export const requestInviteSchema = z.object({
  fullName: z.string().min(1, "Full name required"),
  email: z.string().email("Invalid email address"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  interested: z.string().min(10, "Please tell us why you're interested"),
})

export const lostCodeSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export const paymentSchema = z.object({
  cardName: z.string().min(1, "Cardholder name required"),
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, "Format: MM/YY"),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3-4 digits"),
})

export const submissionSchema = z.object({
  fullName: z.string().min(1, "Full name required"),
  email: z.string().email("Invalid email address"),
  scriptTitle: z.string().min(1, "Script title required"),
  logline: z
    .string()
    .min(10, "Logline must be at least 10 characters")
    .max(500, "Logline must be less than 500 characters"),
  genre: z.string().min(1, "Genre required"),
  scriptLength: z.string().min(1, "Script length category required"),
  confirmOriginal: z.boolean().refine((val) => val === true, "You must confirm originality"),
  scriptFile: z.instanceof(File).refine((file) => file?.type === "application/pdf", "Script must be PDF"),
  synopsisFile: z.instanceof(File).optional(),
})

export type InvitationCodeInput = z.infer<typeof invitationCodeSchema>
export type RequestInviteInput = z.infer<typeof requestInviteSchema>
export type LostCodeInput = z.infer<typeof lostCodeSchema>
export type PaymentInput = z.infer<typeof paymentSchema>
export type SubmissionInput = z.infer<typeof submissionSchema>
