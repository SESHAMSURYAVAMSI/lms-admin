export interface GscRecord {
  id?: string;
  name?: string;
  applicationNo?: string;
  applicationDate?: string;
  status?: "Pending" | "Approved" | "Rejected";
  tdc_reg_certificate?: FileList;
  testimonial_dental1?: FileList;
  testimonial_dental2?: FileList;
  gsc_aadhaar_upload?: FileList;
  post_address?: string;
  tdc_reg_dental1?: FileList;
  tdc_reg_dental2?: FileList;
}