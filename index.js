const exportStops = require("efa-export-stops-by-list");

const ENDPOINT_URL = "http://80.146.180.107/vmv2/XML_STOPLIST_REQUEST?tariffZones=1&coordOutputFormat=WGS84[DD.DDDDD]";

exportStops(ENDPOINT_URL, "ISO-8859-1");
