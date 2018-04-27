# vwm-stops

This is a simple script to download all [VWM](https://de.wikipedia.org/wiki/Verkehrsgemeinschaft_Westmecklenburg) stops as [GTFS-compatible CSV](https://developers.google.com/transit/gtfs/reference/stops-file).

The script uses the following endpoint:

```
http://efa.vmv-mbh.de/vmv2/XML_STOPLIST_REQUEST?tariffZones=1&coordOutputFormat=WGS84[DD.DDDDD]
```

The script produces CSV output in the following format:

```
stop_id,stop_name,stop_lon,stop_lat,stop_code
"44409041","Schwerin, Schwerin Görries",11.38539,53.61006,""
```

# Prerequisites

These scrips use PostGIS to filter stops belonging to administrative regions covered by the transport company.  
See [this project](https://github.com/highsource/postgis-verwaltungsgebiete) for a simple way to create a PostGIS database with administrative regions.

# Usage

## Windows

```
npm install
00-export-unfiltered-stops
01-filter-stops
```

# Disclaimer

Usage of this script may or may not be legal, use on your own risk.  
This repository provides only source code, no data.

# License

Source code is licensed under [BSD 2-clause license](LICENSE). No license and no guarantees implied on the produced data, produce and use on your own risk.
