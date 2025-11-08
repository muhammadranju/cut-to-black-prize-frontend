export const storageKeys = {
  invitationCode: "ctb_invitation_code",
  paymentStatus: "ctb_payment_status",
  submissions: "ctb_submissions",
}

export const storage = {
  setInvitationCode: (code: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKeys.invitationCode, code)
    }
  },
  getInvitationCode: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(storageKeys.invitationCode)
    }
    return null
  },
  clearInvitationCode: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(storageKeys.invitationCode)
    }
  },

  setPaymentStatus: (status: { paid: boolean; amount: number; date: string }) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKeys.paymentStatus, JSON.stringify(status))
    }
  },
  getPaymentStatus: () => {
    if (typeof window !== "undefined") {
      const status = localStorage.getItem(storageKeys.paymentStatus)
      return status ? JSON.parse(status) : null
    }
    return null
  },
  isPaid: () => {
    if (typeof window !== "undefined") {
      const status = localStorage.getItem(storageKeys.paymentStatus)
      return status ? JSON.parse(status).paid : false
    }
    return false
  },

  addSubmission: (submission: any) => {
    if (typeof window !== "undefined") {
      const existing = localStorage.getItem(storageKeys.submissions)
      const submissions = existing ? JSON.parse(existing) : []
      submissions.push({ ...submission, id: Date.now(), date: new Date().toISOString() })
      localStorage.setItem(storageKeys.submissions, JSON.stringify(submissions))
    }
  },
  getSubmissions: () => {
    if (typeof window !== "undefined") {
      const submissions = localStorage.getItem(storageKeys.submissions)
      return submissions ? JSON.parse(submissions) : []
    }
    return []
  },
}
