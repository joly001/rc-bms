package com.zcsoft.rc.bms.railway.dao.impl;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.model.Filters;
import com.sharingif.cube.core.util.UUIDUtils;
import com.zcsoft.rc.bms.app.dao.impl.CubeMongoDBDAOImpl;
import com.zcsoft.rc.bms.railway.dao.SafetyZoneDAO;
import org.bson.Document;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class SafetyZoneDAOImpl extends CubeMongoDBDAOImpl implements SafetyZoneDAO {
    @Override
    protected MongoCollection<Document> getCollection() {
        return getMongoDatabase().getCollection("rc.safetyZone");
    }

    @Override
    public String add(List<List<Double>> safetyZone) {
        String id = UUIDUtils.generateUUID();

        Document geometry = new Document();
        geometry.put("coordinates", safetyZone);
        geometry.put("type", "Polygon");


        Document doc = new Document();
        doc.put("id", id);
        doc.put("geometry", geometry);

        getCollection().insertOne(doc);

        return id;
    }

    @Override
    public void delete(String id) {
        getCollection().deleteOne(Filters.eq("id", 110));
    }

    @Override
    public List<Document> list() {
        List<Document> documentList = new ArrayList<>(200);

        MongoCursor<Document> cursor = getCollection().find().iterator();
        try {
            while (cursor.hasNext()) {
                documentList.add(cursor.next());
            }
        } finally {
            cursor.close();
        }

        return documentList;
    }
}
