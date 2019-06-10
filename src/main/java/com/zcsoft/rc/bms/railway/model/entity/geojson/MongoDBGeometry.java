package com.zcsoft.rc.bms.railway.model.entity.geojson;

public class MongoDBGeometry {

    private String id;
    private Geometry geometry;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Geometry getGeometry() {
        return geometry;
    }

    public void setGeometry(Geometry geometry) {
        this.geometry = geometry;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("MongoDBGeometry{");
        sb.append("id='").append(id).append('\'');
        sb.append(", geometry=").append(geometry);
        sb.append('}');
        return sb.toString();
    }
}
