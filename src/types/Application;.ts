type Application = {
    id?: number;
    name?: string;
    version?: string;
    log_error_path?: string;
    log_access_path?: string;
    regex?: string;
    idx_ip?: number;
    idx_path?: number;
    idx_method?: number;
    idx_req_size?: number;
    idx_date?: number;
    idx_status?: number;
    idx_agent?: number;
    idx_ref_url?: number;
};

export default Application;

/*
    private String name;
    private String version;
    private String log_error_path;
    private String log_access_path;
    private String regex;
    private long idx_ip;
    private long idx_path;
    private long idx_method;
    private long idx_req_size;
    private long idx_date;
    private long idx_status;
    private long idx_agent;
    private long idx_ref_url;
    private long idx_protocol;


*/
