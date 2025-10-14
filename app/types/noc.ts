export interface NocRecord {
  id?: string;
  name?: string;
  applicationNo?: string;
  applicationDate?: string;
  status?: "Pending" | "Approved" | "Rejected";

  // Updated field names to match schema
  dental_council_name?: string;
  current_tdc_reg_certificate?: FileList;
  aadhaar_upload?: FileList;
  post_address?: string;
  payment_id?: string;
}
