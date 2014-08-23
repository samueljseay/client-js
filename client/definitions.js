YUI.add('fhir-definitions', function(Y) {
  Y.namespace('FHIR').Definitions = {
  "Address": {
    "edges": {
      "city": {
        "parser": "string"
      },
      "country": {
        "parser": "string"
      },
      "line": {
        "parser": "string"
      },
      "period": {
        "next": "Period"
      },
      "state": {
        "parser": "string"
      },
      "text": {
        "parser": "string"
      },
      "use": {
        "parser": "string"
      },
      "zip": {
        "parser": "string"
      }
    }
  },
  "AdverseReaction": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "didNotOccurFlag": {
        "parser": "boolean"
      },
      "exposure": {
        "next": "AdverseReaction.exposure"
      },
      "extension": {
        "next": "Extension"
      },
      "reactionDate": {
        "parser": "date"
      },
      "recorder": {
        "next": "ResourceReference"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "symptom": {
        "next": "AdverseReaction.symptom"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "AdverseReaction.exposure": {
    "edges": {
      "causalityExpectation": {
        "parser": "string"
      },
      "exposureDate": {
        "parser": "date"
      },
      "exposureType": {
        "parser": "string"
      },
      "substance": {
        "next": "ResourceReference"
      }
    }
  },
  "AdverseReaction.symptom": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "severity": {
        "parser": "string"
      }
    }
  },
  "Alert": {
    "edges": {
      "author": {
        "next": "ResourceReference"
      },
      "category": {
        "next": "CodeableConcept"
      },
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "note": {
        "parser": "string"
      },
      "status": {
        "parser": "string"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "AllergyIntolerance": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "criticality": {
        "parser": "string"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "reaction": {
        "next": "ResourceReference"
      },
      "recordedDate": {
        "parser": "date"
      },
      "recorder": {
        "next": "ResourceReference"
      },
      "sensitivityTest": {
        "next": "ResourceReference"
      },
      "sensitivityType": {
        "parser": "string"
      },
      "status": {
        "parser": "string"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "substance": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "Attachment": {
    "edges": {
      "contentType": {
        "parser": "string"
      },
      "data": {
        "parser": "string"
      },
      "hash": {
        "parser": "string"
      },
      "language": {
        "parser": "string"
      },
      "size": {
        "parser": "integer"
      },
      "title": {
        "parser": "string"
      },
      "url": {
        "parser": "string"
      }
    }
  },
  "CarePlan": {
    "edges": {
      "activity": {
        "next": "CarePlan.activity"
      },
      "concern": {
        "next": "ResourceReference"
      },
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "goal": {
        "next": "CarePlan.goal"
      },
      "identifier": {
        "next": "Identifier"
      },
      "modified": {
        "parser": "date"
      },
      "notes": {
        "parser": "string"
      },
      "participant": {
        "next": "CarePlan.participant"
      },
      "patient": {
        "next": "ResourceReference"
      },
      "period": {
        "next": "Period"
      },
      "status": {
        "parser": "string"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "CarePlan.activity": {
    "edges": {
      "actionTaken": {
        "next": "ResourceReference"
      },
      "category": {
        "parser": "string"
      },
      "code": {
        "next": "CodeableConcept"
      },
      "dailyAmount": {
        "next": "Quantity"
      },
      "details": {
        "parser": "string"
      },
      "location": {
        "next": "ResourceReference"
      },
      "notes": {
        "parser": "string"
      },
      "performer": {
        "next": "ResourceReference"
      },
      "product": {
        "next": "ResourceReference"
      },
      "prohibited": {
        "parser": "boolean"
      },
      "quantity": {
        "next": "Quantity"
      },
      "status": {
        "parser": "string"
      },
      "timingPeriod": {
        "next": "Period"
      },
      "timingSchedule": {
        "next": "Schedule"
      },
      "timingString": {
        "parser": "string"
      }
    }
  },
  "CarePlan.goal": {
    "edges": {
      "description": {
        "parser": "string"
      },
      "notes": {
        "parser": "string"
      },
      "status": {
        "parser": "string"
      }
    }
  },
  "CarePlan.participant": {
    "edges": {
      "member": {
        "next": "ResourceReference"
      },
      "role": {
        "next": "CodeableConcept"
      }
    }
  },
  "Choice": {
    "edges": {
      "code": {
        "parser": "string"
      },
      "isOrdered": {
        "parser": "boolean"
      },
      "option": {
        "next": "Choice.option"
      }
    }
  },
  "Choice.option": {
    "edges": {
      "code": {
        "parser": "string"
      },
      "display": {
        "parser": "string"
      }
    }
  },
  "CodeableConcept": {
    "edges": {
      "coding": {
        "next": "Coding"
      },
      "primary": {
        "parser": "string"
      },
      "text": {
        "parser": "string"
      }
    }
  },
  "Coding": {
    "edges": {
      "code": {
        "parser": "string"
      },
      "display": {
        "parser": "string"
      },
      "system": {
        "parser": "string"
      }
    }
  },
  "Condition": {
    "edges": {
      "abatementAge": {
        "next": "Age"
      },
      "abatementBoolean": {
        "parser": "boolean"
      },
      "abatementDate": {
        "next": "date"
      },
      "asserter": {
        "next": "ResourceReference"
      },
      "category": {
        "next": "CodeableConcept"
      },
      "certainty": {
        "next": "CodeableConcept"
      },
      "code": {
        "next": "CodeableConcept"
      },
      "contained": {
        "next": "Resource"
      },
      "dateAsserted": {
        "next": "date"
      },
      "encounter": {
        "next": "ResourceReference"
      },
      "evidence": {
        "next": "Condition.evidence"
      },
      "extension": {
        "next": "Extension"
      },
      "location": {
        "next": "Condition.location"
      },
      "notes": {
        "parser": "string"
      },
      "onsetAge": {
        "next": "Age"
      },
      "onsetDate": {
        "next": "date"
      },
      "relatedItem": {
        "next": "Condition.relatedItem"
      },
      "severity": {
        "next": "CodeableConcept"
      },
      "stage": {
        "next": "Condition.stage"
      },
      "status": {
        "parser": "string"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "Condition.evidence": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "detail": {
        "next": "ResourceReference"
      }
    }
  },
  "Condition.location": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "detail": {
        "parser": "string"
      }
    }
  },
  "Condition.relatedItem": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "target": {
        "next": "ResourceReference"
      },
      "type": {
        "parser": "string"
      }
    }
  },
  "Condition.stage": {
    "edges": {
      "assessment": {
        "next": "ResourceReference"
      },
      "summary": {
        "next": "CodeableConcept"
      }
    }
  },
  "Conformance": {
    "edges": {
      "acceptUnknown": {
        "parser": "boolean"
      },
      "contained": {
        "next": "Resource"
      },
      "date": {
        "parser": "date"
      },
      "description": {
        "parser": "string"
      },
      "document": {
        "next": "Conformance.document"
      },
      "experimental": {
        "parser": "boolean"
      },
      "extension": {
        "next": "Extension"
      },
      "fhirVersion": {
        "parser": "string"
      },
      "format": {
        "parser": "string"
      },
      "identifier": {
        "parser": "string"
      },
      "implementation": {
        "next": "Conformance.implementation"
      },
      "messaging": {
        "next": "Conformance.messaging"
      },
      "name": {
        "parser": "string"
      },
      "publisher": {
        "parser": "string"
      },
      "rest": {
        "next": "Conformance.rest"
      },
      "software": {
        "next": "Conformance.software"
      },
      "status": {
        "parser": "string"
      },
      "telecom": {
        "next": "Contact"
      },
      "text": {
        "next": "Narrative"
      },
      "version": {
        "parser": "string"
      }
    }
  },
  "Conformance.document": {
    "edges": {
      "documentation": {
        "parser": "string"
      },
      "mode": {
        "parser": "string"
      },
      "profile": {
        "next": "ResourceReference"
      }
    }
  },
  "Conformance.implementation": {
    "edges": {
      "description": {
        "parser": "string"
      },
      "url": {
        "parser": "string"
      }
    }
  },
  "Conformance.messaging": {
    "edges": {
      "documentation": {
        "parser": "string"
      },
      "endpoint": {
        "parser": "string"
      },
      "event": {
        "next": "Conformance.messaging.event"
      },
      "reliableCache": {
        "parser": "integer"
      }
    }
  },
  "Conformance.messaging.event": {
    "edges": {
      "code": {
        "parser": "string"
      },
      "documentation": {
        "parser": "string"
      },
      "focus": {
        "parser": "string"
      },
      "mode": {
        "parser": "string"
      },
      "protocol": {
        "next": "Coding"
      },
      "request": {
        "next": "ResourceReference"
      },
      "response": {
        "next": "ResourceReference"
      }
    }
  },
  "Conformance.rest": {
    "edges": {
      "batch": {
        "parser": "boolean"
      },
      "documentation": {
        "parser": "string"
      },
      "history": {
        "parser": "boolean"
      },
      "mode": {
        "parser": "string"
      },
      "query": {
        "next": "Conformance.rest.query"
      },
      "resource": {
        "next": "Conformance.rest.resource"
      },
      "security": {
        "next": "Conformance.rest.security"
      }
    }
  },
  "Conformance.rest.query": {
    "edges": {
      "documentation": {
        "parser": "string"
      },
      "name": {
        "parser": "string"
      },
      "parameter": {
        "next": "Conformance.rest.resource.searchParam"
      }
    }
  },
  "Conformance.rest.resource": {
    "edges": {
      "operation": {
        "next": "Conformance.rest.resource.operation"
      },
      "profile": {
        "next": "ResourceReference"
      },
      "readHistory": {
        "parser": "boolean"
      },
      "searchInclude": {
        "parser": "string"
      },
      "searchParam": {
        "next": "Conformance.rest.resource.searchParam"
      },
      "type": {
        "parser": "string"
      }
    }
  },
  "Conformance.rest.resource.operation": {
    "edges": {
      "code": {
        "parser": "string"
      },
      "documentation": {
        "parser": "string"
      }
    }
  },
  "Conformance.rest.resource.searchParam": {
    "edges": {
      "chain": {
        "parser": "string"
      },
      "documentation": {
        "parser": "string"
      },
      "name": {
        "parser": "string"
      },
      "source": {
        "parser": "string"
      },
      "target": {
        "parser": "string"
      },
      "type": {
        "parser": "string"
      },
      "xpath": {
        "parser": "string"
      }
    }
  },
  "Conformance.rest.security": {
    "edges": {
      "certificate": {
        "next": "Conformance.rest.security.certificate"
      },
      "description": {
        "parser": "string"
      },
      "service": {
        "next": "CodeableConcept"
      }
    }
  },
  "Conformance.rest.security.certificate": {
    "edges": {
      "blob": {
        "parser": "string"
      },
      "type": {
        "parser": "string"
      }
    }
  },
  "Conformance.software": {
    "edges": {
      "name": {
        "parser": "string"
      },
      "releaseDate": {
        "parser": "date"
      },
      "version": {
        "parser": "string"
      }
    }
  },
  "Contact": {
    "edges": {
      "period": {
        "next": "Period"
      },
      "system": {
        "parser": "string"
      },
      "use": {
        "parser": "string"
      },
      "value": {
        "parser": "string"
      }
    }
  },
  "Coverage": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "dependent": {
        "parser": "integer"
      },
      "extension": {
        "next": "Extension"
      },
      "group": {
        "next": "Identifier"
      },
      "identifier": {
        "next": "Identifier"
      },
      "issuer": {
        "next": "ResourceReference"
      },
      "period": {
        "next": "Period"
      },
      "plan": {
        "next": "Identifier"
      },
      "sequence": {
        "parser": "integer"
      },
      "subplan": {
        "next": "Identifier"
      },
      "subscriber": {
        "next": "Coverage.subscriber"
      },
      "text": {
        "next": "Narrative"
      },
      "type": {
        "next": "Coding"
      }
    }
  },
  "Coverage.subscriber": {
    "edges": {
      "address": {
        "next": "Address"
      },
      "birthdate": {
        "next": "date"
      },
      "name": {
        "next": "HumanName"
      }
    }
  },
  "Device": {
    "edges": {
      "assignedId": {
        "next": "Identifier"
      },
      "contact": {
        "next": "Contact"
      },
      "contained": {
        "next": "Resource"
      },
      "expiry": {
        "next": "date"
      },
      "extension": {
        "next": "Extension"
      },
      "identity": {
        "next": "Device.identity"
      },
      "location": {
        "next": "ResourceReference"
      },
      "manufacturer": {
        "parser": "string"
      },
      "model": {
        "parser": "string"
      },
      "owner": {
        "next": "ResourceReference"
      },
      "patient": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      },
      "type": {
        "next": "CodeableConcept"
      },
      "url": {
        "parser": "string"
      },
      "version": {
        "parser": "string"
      }
    }
  },
  "Device.identity": {
    "edges": {
      "gtin": {
        "parser": "string"
      },
      "lot": {
        "parser": "string"
      },
      "serialNumber": {
        "parser": "string"
      }
    }
  },
  "DeviceCapabilities": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "identity": {
        "next": "ResourceReference"
      },
      "manufacturer": {
        "parser": "string"
      },
      "name": {
        "parser": "string"
      },
      "text": {
        "next": "Narrative"
      },
      "type": {
        "next": "CodeableConcept"
      },
      "virtualDevice": {
        "next": "DeviceCapabilities.virtualDevice"
      }
    }
  },
  "DeviceCapabilities.virtualDevice": {
    "edges": {
      "channel": {
        "next": "DeviceCapabilities.virtualDevice.channel"
      },
      "code": {
        "next": "CodeableConcept"
      }
    }
  },
  "DeviceCapabilities.virtualDevice.channel": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "metric": {
        "next": "DeviceCapabilities.virtualDevice.channel.metric"
      }
    }
  },
  "DeviceCapabilities.virtualDevice.channel.metric": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "facet": {
        "next": "DeviceCapabilities.virtualDevice.channel.metric.facet"
      },
      "info": {
        "next": "DeviceCapabilities.virtualDevice.channel.metric.info"
      },
      "key": {
        "parser": "string"
      }
    }
  },
  "DeviceCapabilities.virtualDevice.channel.metric.facet": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "info": {
        "next": "DeviceCapabilities.virtualDevice.channel.metric.info"
      },
      "key": {
        "parser": "string"
      },
      "scale": {
        "parser": "float"
      }
    }
  },
  "DeviceCapabilities.virtualDevice.channel.metric.info": {
    "edges": {
      "system": {
        "parser": "string"
      },
      "template": {
        "next": "SampledData"
      },
      "type": {
        "parser": "string"
      },
      "ucum": {
        "parser": "string"
      },
      "units": {
        "parser": "string"
      }
    }
  },
  "DeviceLog": {
    "edges": {
      "capabilities": {
        "next": "ResourceReference"
      },
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "instant": {
        "parser": "date"
      },
      "item": {
        "next": "DeviceLog.item"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "DeviceLog.item": {
    "edges": {
      "flag": {
        "parser": "string"
      },
      "key": {
        "parser": "string"
      },
      "value": {
        "parser": "string"
      }
    }
  },
  "DeviceObservation": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "contained": {
        "next": "Resource"
      },
      "device": {
        "next": "ResourceReference"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "issued": {
        "parser": "date"
      },
      "measurement": {
        "next": "ResourceReference"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "DiagnosticOrder": {
    "edges": {
      "clinicalNotes": {
        "parser": "string"
      },
      "contained": {
        "next": "Resource"
      },
      "encounter": {
        "next": "ResourceReference"
      },
      "event": {
        "next": "DiagnosticOrder.event"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "item": {
        "next": "DiagnosticOrder.item"
      },
      "orderer": {
        "next": "ResourceReference"
      },
      "priority": {
        "parser": "string"
      },
      "specimen": {
        "next": "ResourceReference"
      },
      "status": {
        "parser": "string"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "DiagnosticOrder.event": {
    "edges": {
      "actor": {
        "next": "ResourceReference"
      },
      "date": {
        "parser": "date"
      },
      "status": {
        "parser": "string"
      }
    }
  },
  "DiagnosticOrder.item": {
    "edges": {
      "bodySite": {
        "next": "CodeableConcept"
      },
      "code": {
        "next": "CodeableConcept"
      },
      "event": {
        "next": "DiagnosticOrder.event"
      },
      "specimen": {
        "next": "ResourceReference"
      },
      "status": {
        "parser": "string"
      }
    }
  },
  "DiagnosticReport": {
    "edges": {
      "codedDiagnosis": {
        "next": "CodeableConcept"
      },
      "conclusion": {
        "parser": "string"
      },
      "contained": {
        "next": "Resource"
      },
      "diagnosticTime": {
        "parser": "date"
      },
      "extension": {
        "next": "Extension"
      },
      "image": {
        "next": "ResourceReference"
      },
      "issued": {
        "parser": "date"
      },
      "performer": {
        "next": "ResourceReference"
      },
      "reportId": {
        "next": "Identifier"
      },
      "representation": {
        "next": "Attachment"
      },
      "requestDetail": {
        "next": "DiagnosticReport.requestDetail"
      },
      "results": {
        "next": "DiagnosticReport.results"
      },
      "serviceCategory": {
        "next": "CodeableConcept"
      },
      "status": {
        "parser": "string"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "DiagnosticReport.requestDetail": {
    "edges": {
      "bodySite": {
        "next": "CodeableConcept"
      },
      "clinicalInfo": {
        "parser": "string"
      },
      "encounter": {
        "next": "ResourceReference"
      },
      "receiverOrderId": {
        "next": "Identifier"
      },
      "requestOrderId": {
        "next": "Identifier"
      },
      "requestTest": {
        "next": "CodeableConcept"
      },
      "requester": {
        "next": "ResourceReference"
      }
    }
  },
  "DiagnosticReport.results": {
    "edges": {
      "group": {
        "next": "DiagnosticReport.results"
      },
      "name": {
        "next": "CodeableConcept"
      },
      "result": {
        "next": "ResourceReference"
      },
      "specimen": {
        "next": "ResourceReference"
      }
    }
  },
  "Document": {
    "edges": {
      "attester": {
        "next": "Document.attester"
      },
      "author": {
        "next": "ResourceReference"
      },
      "confidentiality": {
        "next": "Coding"
      },
      "contained": {
        "next": "Resource"
      },
      "created": {
        "parser": "date"
      },
      "custodian": {
        "next": "ResourceReference"
      },
      "encounter": {
        "next": "ResourceReference"
      },
      "event": {
        "next": "Document.event"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "provenance": {
        "next": "ResourceReference"
      },
      "replaces": {
        "parser": "string"
      },
      "representation": {
        "next": "Attachment"
      },
      "section": {
        "next": "Document.section"
      },
      "status": {
        "parser": "string"
      },
      "stylesheet": {
        "next": "Attachment"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "subtype": {
        "next": "CodeableConcept"
      },
      "text": {
        "next": "Narrative"
      },
      "title": {
        "parser": "string"
      },
      "type": {
        "next": "CodeableConcept"
      },
      "versionIdentifier": {
        "next": "Identifier"
      }
    }
  },
  "Document.attester": {
    "edges": {
      "mode": {
        "parser": "string"
      },
      "party": {
        "next": "ResourceReference"
      },
      "time": {
        "parser": "date"
      }
    }
  },
  "Document.event": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "detail": {
        "next": "ResourceReference"
      },
      "period": {
        "next": "Period"
      }
    }
  },
  "Document.section": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "content": {
        "next": "ResourceReference"
      },
      "section": {
        "next": "Document.section"
      },
      "subject": {
        "next": "ResourceReference"
      }
    }
  },
  "DocumentReference": {
    "edges": {
      "authenticator": {
        "next": "ResourceReference"
      },
      "author": {
        "next": "ResourceReference"
      },
      "confidentiality": {
        "next": "CodeableConcept"
      },
      "contained": {
        "next": "Resource"
      },
      "context": {
        "next": "DocumentReference.context"
      },
      "created": {
        "parser": "date"
      },
      "custodian": {
        "next": "ResourceReference"
      },
      "description": {
        "parser": "string"
      },
      "docStatus": {
        "next": "CodeableConcept"
      },
      "extension": {
        "next": "Extension"
      },
      "format": {
        "next": "CodeableConcept"
      },
      "hash": {
        "parser": "string"
      },
      "identifier": {
        "next": "Identifier"
      },
      "indexed": {
        "parser": "date"
      },
      "location": {
        "parser": "string"
      },
      "masterIdentifier": {
        "next": "Identifier"
      },
      "mimeType": {
        "parser": "string"
      },
      "primaryLanguage": {
        "parser": "string"
      },
      "service": {
        "next": "DocumentReference.service"
      },
      "size": {
        "parser": "integer"
      },
      "status": {
        "parser": "string"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "subtype": {
        "next": "CodeableConcept"
      },
      "supercedes": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "DocumentReference.context": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "facilityType": {
        "next": "CodeableConcept"
      },
      "period": {
        "next": "Period"
      }
    }
  },
  "DocumentReference.service": {
    "edges": {
      "address": {
        "parser": "string"
      },
      "parameter": {
        "next": "DocumentReference.service.parameter"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "DocumentReference.service.parameter": {
    "edges": {
      "name": {
        "parser": "string"
      },
      "value": {
        "parser": "string"
      }
    }
  },
  "Encounter": {
    "edges": {
      "class": {
        "parser": "string"
      },
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "fulfills": {
        "next": "ResourceReference"
      },
      "hospitalization": {
        "next": "Encounter.hospitalization"
      },
      "identifier": {
        "next": "Identifier"
      },
      "indication": {
        "next": "ResourceReference"
      },
      "length": {
        "next": "Duration"
      },
      "location": {
        "next": "Encounter.location"
      },
      "partOf": {
        "next": "ResourceReference"
      },
      "participant": {
        "next": "Encounter.participant"
      },
      "priority": {
        "next": "CodeableConcept"
      },
      "reasonCodeableConcept": {
        "next": "CodeableConcept"
      },
      "reasonString": {
        "parser": "string"
      },
      "serviceProvider": {
        "next": "ResourceReference"
      },
      "start": {
        "parser": "date"
      },
      "status": {
        "parser": "string"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "Encounter.hospitalization": {
    "edges": {
      "accomodation": {
        "next": "Encounter.hospitalization.accomodation"
      },
      "admitSource": {
        "next": "CodeableConcept"
      },
      "destination": {
        "next": "ResourceReference"
      },
      "diet": {
        "next": "CodeableConcept"
      },
      "dischargeDisposition": {
        "next": "CodeableConcept"
      },
      "origin": {
        "next": "ResourceReference"
      },
      "period": {
        "next": "Period"
      },
      "preAdmissionIdentifier": {
        "next": "Identifier"
      },
      "reAdmission": {
        "parser": "boolean"
      },
      "specialArrangement": {
        "next": "CodeableConcept"
      },
      "specialCourtesy": {
        "next": "CodeableConcept"
      }
    }
  },
  "Encounter.hospitalization.accomodation": {
    "edges": {
      "bed": {
        "next": "ResourceReference"
      },
      "period": {
        "next": "Period"
      }
    }
  },
  "Encounter.location": {
    "edges": {
      "location": {
        "next": "ResourceReference"
      },
      "period": {
        "next": "Period"
      }
    }
  },
  "Encounter.participant": {
    "edges": {
      "practitioner": {
        "next": "ResourceReference"
      },
      "type": {
        "parser": "string"
      }
    }
  },
  "Extension": {
    "edges": {
      "isModifier": {
        "parser": "boolean"
      },
      "url": {
        "parser": "string"
      },
      "value": {
        "next": "Extension.value"
      }
    }
  },
  "FamilyHistory": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "note": {
        "parser": "string"
      },
      "relation": {
        "next": "FamilyHistory.relation"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "FamilyHistory.relation": {
    "edges": {
      "condition": {
        "next": "FamilyHistory.relation.condition"
      },
      "deceasedAge": {
        "next": "Age"
      },
      "deceasedBoolean": {
        "parser": "boolean"
      },
      "deceasedRange": {
        "next": "Range"
      },
      "deceasedString": {
        "parser": "string"
      },
      "name": {
        "parser": "string"
      },
      "note": {
        "parser": "string"
      },
      "relationship": {
        "next": "CodeableConcept"
      }
    }
  },
  "FamilyHistory.relation.condition": {
    "edges": {
      "note": {
        "parser": "string"
      },
      "onsetAge": {
        "next": "Age"
      },
      "onsetRange": {
        "next": "Range"
      },
      "onsetString": {
        "parser": "string"
      },
      "outcome": {
        "next": "CodeableConcept"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "Group": {
    "edges": {
      "actual": {
        "parser": "boolean"
      },
      "characteristic": {
        "next": "Group.characteristic"
      },
      "code": {
        "next": "CodeableConcept"
      },
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "member": {
        "next": "ResourceReference"
      },
      "name": {
        "parser": "string"
      },
      "quantity": {
        "parser": "integer"
      },
      "text": {
        "next": "Narrative"
      },
      "type": {
        "parser": "string"
      }
    }
  },
  "Group.characteristic": {
    "edges": {
      "exclude": {
        "parser": "boolean"
      },
      "type": {
        "next": "CodeableConcept"
      },
      "valueBoolean": {
        "parser": "boolean"
      },
      "valueCodeableConcept": {
        "next": "CodeableConcept"
      },
      "valueQuantity": {
        "next": "Quantity"
      },
      "valueRange": {
        "next": "Range"
      },
      "valueString": {
        "parser": "string"
      }
    }
  },
  "HumanName": {
    "edges": {
      "family": {
        "parser": "string"
      },
      "given": {
        "parser": "string"
      },
      "period": {
        "next": "Period"
      },
      "prefix": {
        "parser": "string"
      },
      "suffix": {
        "parser": "string"
      },
      "text": {
        "parser": "string"
      },
      "use": {
        "parser": "string"
      }
    }
  },
  "Identifier": {
    "edges": {
      "assigner": {
        "next": "ResourceReference"
      },
      "key": {
        "parser": "string"
      },
      "label": {
        "parser": "string"
      },
      "period": {
        "next": "Period"
      },
      "system": {
        "parser": "string"
      },
      "use": {
        "parser": "string"
      }
    }
  },
  "ImagingStudy": {
    "edges": {
      "accessionNo": {
        "next": "Identifier"
      },
      "availability": {
        "parser": "string"
      },
      "clinicalInformation": {
        "parser": "string"
      },
      "contained": {
        "next": "Resource"
      },
      "dateTime": {
        "parser": "date"
      },
      "description": {
        "parser": "string"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "interpreter": {
        "next": "ResourceReference"
      },
      "modality": {
        "parser": "string"
      },
      "numberOfInstances": {
        "parser": "integer"
      },
      "numberOfSeries": {
        "parser": "integer"
      },
      "procedure": {
        "next": "Coding"
      },
      "referrer": {
        "next": "ResourceReference"
      },
      "series": {
        "next": "ImagingStudy.series"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      },
      "uid": {
        "parser": "string"
      },
      "url": {
        "parser": "string"
      }
    }
  },
  "ImagingStudy.series": {
    "edges": {
      "availability": {
        "parser": "string"
      },
      "bodySite": {
        "next": "Coding"
      },
      "dateTime": {
        "parser": "date"
      },
      "description": {
        "parser": "string"
      },
      "instance": {
        "next": "ImagingStudy.series.instance"
      },
      "modality": {
        "parser": "string"
      },
      "number": {
        "parser": "integer"
      },
      "numberOfInstances": {
        "parser": "integer"
      },
      "uid": {
        "parser": "string"
      },
      "url": {
        "parser": "string"
      }
    }
  },
  "ImagingStudy.series.instance": {
    "edges": {
      "attachment": {
        "next": "ResourceReference"
      },
      "number": {
        "parser": "integer"
      },
      "sopclass": {
        "parser": "string"
      },
      "title": {
        "parser": "string"
      },
      "type": {
        "parser": "string"
      },
      "uid": {
        "parser": "string"
      },
      "url": {
        "parser": "string"
      }
    }
  },
  "Immunization": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "date": {
        "parser": "date"
      },
      "doseQuantity": {
        "next": "Quantity"
      },
      "expirationDate": {
        "next": "date"
      },
      "explanation": {
        "next": "Immunization.explanation"
      },
      "extension": {
        "next": "Extension"
      },
      "location": {
        "next": "ResourceReference"
      },
      "lotNumber": {
        "parser": "string"
      },
      "manufacturer": {
        "next": "ResourceReference"
      },
      "performer": {
        "next": "ResourceReference"
      },
      "reaction": {
        "next": "Immunization.reaction"
      },
      "refusedIndicator": {
        "parser": "boolean"
      },
      "reported": {
        "parser": "boolean"
      },
      "requester": {
        "next": "ResourceReference"
      },
      "route": {
        "next": "CodeableConcept"
      },
      "site": {
        "next": "CodeableConcept"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      },
      "vaccinationProtocol": {
        "next": "Immunization.vaccinationProtocol"
      },
      "vaccineType": {
        "next": "CodeableConcept"
      }
    }
  },
  "Immunization.explanation": {
    "edges": {
      "reason": {
        "next": "CodeableConcept"
      },
      "refusalReason": {
        "next": "CodeableConcept"
      }
    }
  },
  "Immunization.reaction": {
    "edges": {
      "date": {
        "parser": "date"
      },
      "detail": {
        "next": "ResourceReference"
      },
      "reported": {
        "parser": "boolean"
      }
    }
  },
  "Immunization.vaccinationProtocol": {
    "edges": {
      "authority": {
        "next": "ResourceReference"
      },
      "description": {
        "parser": "string"
      },
      "doseSequence": {
        "parser": "integer"
      },
      "doseStatus": {
        "next": "CodeableConcept"
      },
      "doseStatusReason": {
        "next": "CodeableConcept"
      },
      "doseTarget": {
        "next": "CodeableConcept"
      },
      "series": {
        "parser": "string"
      },
      "seriesDoses": {
        "parser": "integer"
      }
    }
  },
  "ImmunizationProfile": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "recommendation": {
        "next": "ImmunizationProfile.recommendation"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "ImmunizationProfile.recommendation": {
    "edges": {
      "dateCriterion": {
        "next": "ImmunizationProfile.recommendation.dateCriterion"
      },
      "doseNumber": {
        "parser": "integer"
      },
      "forecastStatus": {
        "parser": "string"
      },
      "protocol": {
        "next": "ImmunizationProfile.recommendation.protocol"
      },
      "recommendationDate": {
        "parser": "date"
      },
      "supportingAdverseEventReport": {
        "next": "ImmunizationProfile.recommendation.supportingAdverseEventReport"
      },
      "supportingImmunization": {
        "next": "ResourceReference"
      },
      "supportingPatientObservation": {
        "next": "ResourceReference"
      },
      "vaccineType": {
        "next": "CodeableConcept"
      }
    }
  },
  "ImmunizationProfile.recommendation.dateCriterion": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "value": {
        "parser": "date"
      }
    }
  },
  "ImmunizationProfile.recommendation.protocol": {
    "edges": {
      "authority": {
        "next": "ResourceReference"
      },
      "description": {
        "parser": "string"
      },
      "doseSequence": {
        "parser": "integer"
      },
      "series": {
        "parser": "string"
      }
    }
  },
  "ImmunizationProfile.recommendation.supportingAdverseEventReport": {
    "edges": {
      "identifier": {
        "parser": "string"
      },
      "reaction": {
        "next": "ResourceReference"
      },
      "reportDate": {
        "parser": "date"
      },
      "reportType": {
        "next": "CodeableConcept"
      },
      "text": {
        "parser": "string"
      }
    }
  },
  "List": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "contained": {
        "next": "Resource"
      },
      "date": {
        "parser": "date"
      },
      "emptyReason": {
        "next": "CodeableConcept"
      },
      "entry": {
        "next": "List.entry"
      },
      "extension": {
        "next": "Extension"
      },
      "mode": {
        "parser": "string"
      },
      "ordered": {
        "parser": "boolean"
      },
      "source": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "List.entry": {
    "edges": {
      "date": {
        "parser": "date"
      },
      "deleted": {
        "parser": "boolean"
      },
      "flag": {
        "next": "CodeableConcept"
      },
      "item": {
        "next": "ResourceReference"
      }
    }
  },
  "Location": {
    "edges": {
      "active": {
        "parser": "boolean"
      },
      "address": {
        "next": "Address"
      },
      "contained": {
        "next": "Resource"
      },
      "description": {
        "parser": "string"
      },
      "extension": {
        "next": "Extension"
      },
      "name": {
        "parser": "string"
      },
      "partOf": {
        "next": "ResourceReference"
      },
      "position": {
        "next": "Location.position"
      },
      "provider": {
        "next": "ResourceReference"
      },
      "telecom": {
        "next": "Contact"
      },
      "text": {
        "next": "Narrative"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "Location.position": {
    "edges": {
      "altitude": {
        "parser": "float"
      },
      "latitude": {
        "parser": "float"
      },
      "longitude": {
        "parser": "float"
      }
    }
  },
  "Media": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "content": {
        "next": "Attachment"
      },
      "dateTime": {
        "parser": "date"
      },
      "deviceName": {
        "parser": "string"
      },
      "extension": {
        "next": "Extension"
      },
      "frames": {
        "parser": "integer"
      },
      "height": {
        "parser": "integer"
      },
      "identifier": {
        "next": "Identifier"
      },
      "length": {
        "parser": "integer"
      },
      "operator": {
        "next": "ResourceReference"
      },
      "requester": {
        "next": "ResourceReference"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "subtype": {
        "next": "CodeableConcept"
      },
      "text": {
        "next": "Narrative"
      },
      "type": {
        "parser": "string"
      },
      "view": {
        "next": "CodeableConcept"
      },
      "width": {
        "parser": "integer"
      }
    }
  },
  "Medication": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "isBrand": {
        "parser": "boolean"
      },
      "kind": {
        "parser": "string"
      },
      "manufacturer": {
        "next": "ResourceReference"
      },
      "name": {
        "parser": "string"
      },
      "package": {
        "next": "Medication.package"
      },
      "product": {
        "next": "Medication.product"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "Medication.package": {
    "edges": {
      "container": {
        "next": "CodeableConcept"
      },
      "content": {
        "next": "Medication.package.content"
      }
    }
  },
  "Medication.package.content": {
    "edges": {
      "amount": {
        "next": "Quantity"
      },
      "item": {
        "next": "ResourceReference"
      }
    }
  },
  "Medication.product": {
    "edges": {
      "form": {
        "next": "CodeableConcept"
      },
      "ingredient": {
        "next": "Medication.product.ingredient"
      }
    }
  },
  "Medication.product.ingredient": {
    "edges": {
      "amount": {
        "next": "Ratio"
      },
      "item": {
        "next": "ResourceReference"
      }
    }
  },
  "MedicationAdministration": {
    "edges": {
      "administrationDevice": {
        "next": "ResourceReference"
      },
      "contained": {
        "next": "Resource"
      },
      "dosage": {
        "next": "MedicationAdministration.dosage"
      },
      "encounter": {
        "next": "ResourceReference"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "medication": {
        "next": "ResourceReference"
      },
      "patient": {
        "next": "ResourceReference"
      },
      "practitioner": {
        "next": "ResourceReference"
      },
      "prescription": {
        "next": "ResourceReference"
      },
      "reasonNotGiven": {
        "next": "CodeableConcept"
      },
      "status": {
        "parser": "string"
      },
      "text": {
        "next": "Narrative"
      },
      "wasNotGiven": {
        "parser": "boolean"
      },
      "whenGiven": {
        "next": "Period"
      }
    }
  },
  "MedicationAdministration.dosage": {
    "edges": {
      "maxDosePerPeriod": {
        "next": "Ratio"
      },
      "method": {
        "next": "CodeableConcept"
      },
      "quantity": {
        "next": "Quantity"
      },
      "rate": {
        "next": "Ratio"
      },
      "route": {
        "next": "CodeableConcept"
      },
      "site": {
        "next": "CodeableConcept"
      },
      "timing": {
        "next": "Schedule"
      }
    }
  },
  "MedicationDispense": {
    "edges": {
      "authorizingPrescription": {
        "next": "ResourceReference"
      },
      "contained": {
        "next": "Resource"
      },
      "dispense": {
        "next": "MedicationDispense.dispense"
      },
      "dispenser": {
        "next": "ResourceReference"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "patient": {
        "next": "ResourceReference"
      },
      "status": {
        "parser": "string"
      },
      "substitution": {
        "next": "MedicationDispense.substitution"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "MedicationDispense.dispense": {
    "edges": {
      "destination": {
        "next": "ResourceReference"
      },
      "dosage": {
        "next": "MedicationDispense.dispense.dosage"
      },
      "identifier": {
        "next": "Identifier"
      },
      "medication": {
        "next": "ResourceReference"
      },
      "quantity": {
        "next": "Quantity"
      },
      "receiver": {
        "next": "ResourceReference"
      },
      "status": {
        "parser": "string"
      },
      "type": {
        "next": "CodeableConcept"
      },
      "whenHandedOver": {
        "next": "Period"
      },
      "whenPrepared": {
        "next": "Period"
      }
    }
  },
  "MedicationDispense.dispense.dosage": {
    "edges": {
      "additionalInstructionsCodeableConcept": {
        "next": "CodeableConcept"
      },
      "additionalInstructionsString": {
        "parser": "string"
      },
      "maxDosePerPeriod": {
        "next": "Ratio"
      },
      "method": {
        "next": "CodeableConcept"
      },
      "quantity": {
        "next": "Quantity"
      },
      "rate": {
        "next": "Ratio"
      },
      "route": {
        "next": "CodeableConcept"
      },
      "site": {
        "next": "CodeableConcept"
      },
      "timingDateTime": {
        "parser": "date"
      },
      "timingPeriod": {
        "next": "Period"
      },
      "timingSchedule": {
        "next": "Schedule"
      }
    }
  },
  "MedicationDispense.substitution": {
    "edges": {
      "reason": {
        "next": "CodeableConcept"
      },
      "responsibleParty": {
        "next": "ResourceReference"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "MedicationPrescription": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "dateWritten": {
        "parser": "date"
      },
      "dispense": {
        "next": "MedicationPrescription.dispense"
      },
      "dosageInstruction": {
        "next": "MedicationPrescription.dosageInstruction"
      },
      "encounter": {
        "next": "ResourceReference"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "medication": {
        "next": "ResourceReference"
      },
      "patient": {
        "next": "ResourceReference"
      },
      "prescriber": {
        "next": "ResourceReference"
      },
      "reasonForPrescribingCodeableConcept": {
        "next": "CodeableConcept"
      },
      "reasonForPrescribingString": {
        "parser": "string"
      },
      "status": {
        "parser": "string"
      },
      "substitution": {
        "next": "MedicationPrescription.substitution"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "MedicationPrescription.dispense": {
    "edges": {
      "expectedSupplyDuration": {
        "next": "Duration"
      },
      "medication": {
        "next": "ResourceReference"
      },
      "numberOfRepeatsAllowed": {
        "parser": "integer"
      },
      "quantity": {
        "next": "Quantity"
      },
      "validityPeriod": {
        "next": "Period"
      }
    }
  },
  "MedicationPrescription.dosageInstruction": {
    "edges": {
      "additionalInstructionsCodeableConcept": {
        "next": "CodeableConcept"
      },
      "additionalInstructionsString": {
        "parser": "string"
      },
      "dosageInstructionsText": {
        "parser": "string"
      },
      "doseQuantity": {
        "next": "Quantity"
      },
      "maxDosePerPeriod": {
        "next": "Ratio"
      },
      "method": {
        "next": "CodeableConcept"
      },
      "rate": {
        "next": "Ratio"
      },
      "route": {
        "next": "CodeableConcept"
      },
      "site": {
        "next": "CodeableConcept"
      },
      "timingDateTime": {
        "parser": "date"
      },
      "timingPeriod": {
        "next": "Period"
      },
      "timingSchedule": {
        "next": "Schedule"
      }
    }
  },
  "MedicationPrescription.substitution": {
    "edges": {
      "reason": {
        "next": "CodeableConcept"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "MedicationStatement": {
    "edges": {
      "administrationDevice": {
        "next": "ResourceReference"
      },
      "contained": {
        "next": "Resource"
      },
      "dosage": {
        "next": "MedicationStatement.dosage"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "medication": {
        "next": "ResourceReference"
      },
      "patient": {
        "next": "ResourceReference"
      },
      "reasonNotGiven": {
        "next": "CodeableConcept"
      },
      "text": {
        "next": "Narrative"
      },
      "wasNotGiven": {
        "parser": "boolean"
      },
      "whenGiven": {
        "next": "Period"
      }
    }
  },
  "MedicationStatement.dosage": {
    "edges": {
      "maxDosePerPeriod": {
        "next": "Ratio"
      },
      "method": {
        "next": "CodeableConcept"
      },
      "quantity": {
        "next": "Quantity"
      },
      "rate": {
        "next": "Ratio"
      },
      "route": {
        "next": "CodeableConcept"
      },
      "site": {
        "next": "CodeableConcept"
      },
      "timing": {
        "next": "Schedule"
      }
    }
  },
  "Message": {
    "edges": {
      "author": {
        "next": "ResourceReference"
      },
      "contained": {
        "next": "Resource"
      },
      "data": {
        "next": "ResourceReference"
      },
      "destination": {
        "next": "Message.destination"
      },
      "effective": {
        "next": "Period"
      },
      "enterer": {
        "next": "ResourceReference"
      },
      "event": {
        "parser": "string"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "parser": "string"
      },
      "reason": {
        "next": "CodeableConcept"
      },
      "receiver": {
        "next": "ResourceReference"
      },
      "response": {
        "next": "Message.response"
      },
      "responsible": {
        "next": "ResourceReference"
      },
      "source": {
        "next": "Message.source"
      },
      "text": {
        "next": "Narrative"
      },
      "timestamp": {
        "parser": "date"
      }
    }
  },
  "Message.destination": {
    "edges": {
      "endpoint": {
        "parser": "string"
      },
      "name": {
        "parser": "string"
      },
      "target": {
        "next": "ResourceReference"
      }
    }
  },
  "Message.response": {
    "edges": {
      "code": {
        "parser": "string"
      },
      "details": {
        "next": "ResourceReference"
      },
      "identifier": {
        "parser": "string"
      }
    }
  },
  "Message.source": {
    "edges": {
      "contact": {
        "next": "Contact"
      },
      "endpoint": {
        "parser": "string"
      },
      "name": {
        "parser": "string"
      },
      "software": {
        "parser": "string"
      },
      "version": {
        "parser": "string"
      }
    }
  },
  "Narrative": {
    "edges": {
      "div": {
        "parser": "string"
      },
      "status": {
        "parser": "string"
      }
    }
  },
  "Observation": {
    "edges": {
      "appliesDateTime": {
        "parser": "date"
      },
      "appliesPeriod": {
        "next": "Period"
      },
      "bodySite": {
        "next": "CodeableConcept"
      },
      "comments": {
        "parser": "string"
      },
      "component": {
        "next": "Observation.component"
      },
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "interpretation": {
        "next": "CodeableConcept"
      },
      "issued": {
        "parser": "date"
      },
      "method": {
        "next": "CodeableConcept"
      },
      "name": {
        "next": "CodeableConcept"
      },
      "performer": {
        "next": "ResourceReference"
      },
      "referenceRange": {
        "next": "Observation.referenceRange"
      },
      "reliability": {
        "parser": "string"
      },
      "status": {
        "parser": "string"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      },
      "valueAttachment": {
        "next": "Attachment"
      },
      "valueChoice": {
        "next": "Choice"
      },
      "valueCodeableConcept": {
        "next": "CodeableConcept"
      },
      "valuePeriod": {
        "next": "Period"
      },
      "valueQuantity": {
        "next": "Quantity"
      },
      "valueRatio": {
        "next": "Ratio"
      },
      "valueSampledData": {
        "next": "SampledData"
      },
      "valueString": {
        "parser": "string"
      }
    }
  },
  "Observation.component": {
    "edges": {
      "name": {
        "next": "CodeableConcept"
      },
      "valueAttachment": {
        "next": "Attachment"
      },
      "valueChoice": {
        "next": "Choice"
      },
      "valueCodeableConcept": {
        "next": "CodeableConcept"
      },
      "valuePeriod": {
        "next": "Period"
      },
      "valueQuantity": {
        "next": "Quantity"
      },
      "valueRatio": {
        "next": "Ratio"
      },
      "valueSampledData": {
        "next": "SampledData"
      },
      "valueString": {
        "parser": "string"
      }
    }
  },
  "Observation.referenceRange": {
    "edges": {
      "meaning": {
        "next": "CodeableConcept"
      },
      "rangeQuantity": {
        "next": "Quantity"
      },
      "rangeRange": {
        "next": "Range"
      },
      "rangeString": {
        "parser": "string"
      }
    }
  },
  "OperationOutcome": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "issue": {
        "next": "OperationOutcome.issue"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "OperationOutcome.issue": {
    "edges": {
      "details": {
        "parser": "string"
      },
      "location": {
        "parser": "string"
      },
      "severity": {
        "parser": "string"
      },
      "type": {
        "next": "Coding"
      }
    }
  },
  "Order": {
    "edges": {
      "authority": {
        "next": "ResourceReference"
      },
      "contained": {
        "next": "Resource"
      },
      "date": {
        "parser": "date"
      },
      "detail": {
        "next": "ResourceReference"
      },
      "extension": {
        "next": "Extension"
      },
      "reason": {
        "parser": "string"
      },
      "source": {
        "next": "ResourceReference"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "target": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      },
      "when": {
        "next": "Order.when"
      }
    }
  },
  "Order.when": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "schedule": {
        "next": "Schedule"
      }
    }
  },
  "OrderResponse": {
    "edges": {
      "authority": {
        "next": "ResourceReference"
      },
      "code": {
        "parser": "string"
      },
      "contained": {
        "next": "Resource"
      },
      "cost": {
        "next": "Money"
      },
      "date": {
        "parser": "date"
      },
      "description": {
        "parser": "string"
      },
      "extension": {
        "next": "Extension"
      },
      "fulfillment": {
        "next": "ResourceReference"
      },
      "request": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      },
      "who": {
        "next": "ResourceReference"
      }
    }
  },
  "Organization": {
    "edges": {
      "active": {
        "parser": "boolean"
      },
      "address": {
        "next": "Address"
      },
      "contact": {
        "next": "Organization.contact"
      },
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "name": {
        "parser": "string"
      },
      "partOf": {
        "next": "ResourceReference"
      },
      "telecom": {
        "next": "Contact"
      },
      "text": {
        "next": "Narrative"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "Organization.contact": {
    "edges": {
      "address": {
        "next": "Address"
      },
      "gender": {
        "next": "CodeableConcept"
      },
      "name": {
        "next": "HumanName"
      },
      "purpose": {
        "next": "CodeableConcept"
      },
      "telecom": {
        "next": "Contact"
      }
    }
  },
  "Other": {
    "edges": {
      "author": {
        "next": "ResourceReference"
      },
      "code": {
        "next": "CodeableConcept"
      },
      "contained": {
        "next": "Resource"
      },
      "created": {
        "next": "date"
      },
      "extension": {
        "next": "Extension"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "Patient": {
    "edges": {
      "active": {
        "parser": "boolean"
      },
      "address": {
        "next": "Address"
      },
      "animal": {
        "next": "Patient.animal"
      },
      "birthDate": {
        "parser": "date"
      },
      "communication": {
        "next": "CodeableConcept"
      },
      "contact": {
        "next": "Patient.contact"
      },
      "contained": {
        "next": "Resource"
      },
      "deceasedBoolean": {
        "parser": "boolean"
      },
      "deceasedDateTime": {
        "parser": "date"
      },
      "extension": {
        "next": "Extension"
      },
      "gender": {
        "next": "CodeableConcept"
      },
      "identifier": {
        "next": "Identifier"
      },
      "link": {
        "next": "ResourceReference"
      },
      "maritalStatus": {
        "next": "CodeableConcept"
      },
      "multipleBirthBoolean": {
        "parser": "boolean"
      },
      "multipleBirthInteger": {
        "parser": "integer"
      },
      "name": {
        "next": "HumanName"
      },
      "photo": {
        "next": "Attachment"
      },
      "provider": {
        "next": "ResourceReference"
      },
      "telecom": {
        "next": "Contact"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "Patient.animal": {
    "edges": {
      "breed": {
        "next": "CodeableConcept"
      },
      "genderStatus": {
        "next": "CodeableConcept"
      },
      "species": {
        "next": "CodeableConcept"
      }
    }
  },
  "Patient.contact": {
    "edges": {
      "address": {
        "next": "Address"
      },
      "gender": {
        "next": "CodeableConcept"
      },
      "name": {
        "next": "HumanName"
      },
      "organization": {
        "next": "ResourceReference"
      },
      "relationship": {
        "next": "CodeableConcept"
      },
      "telecom": {
        "next": "Contact"
      }
    }
  },
  "Period": {
    "edges": {
      "end": {
        "parser": "date"
      },
      "start": {
        "parser": "date"
      }
    }
  },
  "Practitioner": {
    "edges": {
      "address": {
        "next": "Address"
      },
      "birthDate": {
        "parser": "date"
      },
      "communication": {
        "next": "CodeableConcept"
      },
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "gender": {
        "next": "CodeableConcept"
      },
      "identifier": {
        "next": "Identifier"
      },
      "name": {
        "next": "HumanName"
      },
      "organization": {
        "next": "ResourceReference"
      },
      "period": {
        "next": "Period"
      },
      "photo": {
        "next": "Attachment"
      },
      "qualification": {
        "next": "Practitioner.qualification"
      },
      "role": {
        "next": "CodeableConcept"
      },
      "specialty": {
        "next": "CodeableConcept"
      },
      "telecom": {
        "next": "Contact"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "Practitioner.qualification": {
    "edges": {
      "code": {
        "next": "CodeableConcept"
      },
      "issuer": {
        "next": "ResourceReference"
      },
      "period": {
        "next": "Period"
      }
    }
  },
  "Procedure": {
    "edges": {
      "bodySite": {
        "next": "CodeableConcept"
      },
      "complication": {
        "parser": "string"
      },
      "contained": {
        "next": "Resource"
      },
      "date": {
        "next": "Period"
      },
      "encounter": {
        "next": "ResourceReference"
      },
      "extension": {
        "next": "Extension"
      },
      "followUp": {
        "parser": "string"
      },
      "indication": {
        "parser": "string"
      },
      "notes": {
        "parser": "string"
      },
      "outcome": {
        "parser": "string"
      },
      "performer": {
        "next": "Procedure.performer"
      },
      "relatedItem": {
        "next": "Procedure.relatedItem"
      },
      "report": {
        "next": "ResourceReference"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "Procedure.performer": {
    "edges": {
      "person": {
        "next": "ResourceReference"
      },
      "role": {
        "next": "CodeableConcept"
      }
    }
  },
  "Procedure.relatedItem": {
    "edges": {
      "target": {
        "next": "ResourceReference"
      },
      "type": {
        "parser": "string"
      }
    }
  },
  "Profile": {
    "edges": {
      "binding": {
        "next": "Profile.binding"
      },
      "code": {
        "next": "Coding"
      },
      "contained": {
        "next": "Resource"
      },
      "date": {
        "parser": "date"
      },
      "description": {
        "parser": "string"
      },
      "experimental": {
        "parser": "boolean"
      },
      "extension": {
        "next": "Extension"
      },
      "extensionDefn": {
        "next": "Profile.extensionDefn"
      },
      "fhirVersion": {
        "parser": "string"
      },
      "identifier": {
        "parser": "string"
      },
      "name": {
        "parser": "string"
      },
      "publisher": {
        "parser": "string"
      },
      "status": {
        "parser": "string"
      },
      "structure": {
        "next": "Profile.structure"
      },
      "telecom": {
        "next": "Contact"
      },
      "text": {
        "next": "Narrative"
      },
      "version": {
        "parser": "string"
      }
    }
  },
  "Profile.binding": {
    "edges": {
      "conformance": {
        "parser": "string"
      },
      "description": {
        "parser": "string"
      },
      "isExtensible": {
        "parser": "boolean"
      },
      "name": {
        "parser": "string"
      },
      "referenceResourceReference": {
        "next": "ResourceReference"
      },
      "referenceUri": {
        "parser": "string"
      }
    }
  },
  "Profile.extensionDefn": {
    "edges": {
      "code": {
        "parser": "string"
      },
      "context": {
        "parser": "string"
      },
      "contextType": {
        "parser": "string"
      },
      "definition": {
        "next": "Profile.structure.element.definition"
      }
    }
  },
  "Profile.structure": {
    "edges": {
      "element": {
        "next": "Profile.structure.element"
      },
      "name": {
        "parser": "string"
      },
      "publish": {
        "parser": "boolean"
      },
      "purpose": {
        "parser": "string"
      },
      "type": {
        "parser": "string"
      }
    }
  },
  "Profile.structure.element": {
    "edges": {
      "definition": {
        "next": "Profile.structure.element.definition"
      },
      "name": {
        "parser": "string"
      },
      "path": {
        "parser": "string"
      },
      "slicing": {
        "next": "Profile.structure.element.slicing"
      }
    }
  },
  "Profile.structure.element.definition": {
    "edges": {
      "binding": {
        "parser": "string"
      },
      "comments": {
        "parser": "string"
      },
      "condition": {
        "parser": "string"
      },
      "constraint": {
        "next": "Profile.structure.element.definition.constraint"
      },
      "example": {
        "next": "Profile.structure.element.definition.example"
      },
      "formal": {
        "parser": "string"
      },
      "isModifier": {
        "parser": "boolean"
      },
      "mapping": {
        "next": "Profile.structure.element.definition.mapping"
      },
      "max": {
        "parser": "string"
      },
      "maxLength": {
        "parser": "integer"
      },
      "min": {
        "parser": "integer"
      },
      "mustSupport": {
        "parser": "boolean"
      },
      "nameReference": {
        "parser": "string"
      },
      "requirements": {
        "parser": "string"
      },
      "short": {
        "parser": "string"
      },
      "synonym": {
        "parser": "string"
      },
      "type": {
        "next": "Profile.structure.element.definition.type"
      },
      "value": {
        "next": "Profile.structure.element.definition.value"
      }
    }
  },
  "Profile.structure.element.definition.constraint": {
    "edges": {
      "human": {
        "parser": "string"
      },
      "key": {
        "parser": "string"
      },
      "name": {
        "parser": "string"
      },
      "ocl": {
        "parser": "string"
      },
      "severity": {
        "parser": "string"
      },
      "xpath": {
        "parser": "string"
      }
    }
  },
  "Profile.structure.element.definition.mapping": {
    "edges": {
      "map": {
        "parser": "string"
      },
      "target": {
        "parser": "string"
      }
    }
  },
  "Profile.structure.element.definition.type": {
    "edges": {
      "bundled": {
        "parser": "boolean"
      },
      "code": {
        "parser": "string"
      },
      "profile": {
        "parser": "string"
      }
    }
  },
  "Profile.structure.element.slicing": {
    "edges": {
      "discriminator": {
        "parser": "string"
      },
      "ordered": {
        "parser": "boolean"
      },
      "rules": {
        "parser": "string"
      }
    }
  },
  "Provenance": {
    "edges": {
      "agent": {
        "next": "Provenance.agent"
      },
      "contained": {
        "next": "Resource"
      },
      "entity": {
        "next": "Provenance.entity"
      },
      "extension": {
        "next": "Extension"
      },
      "location": {
        "next": "ResourceReference"
      },
      "period": {
        "next": "Period"
      },
      "policy": {
        "parser": "string"
      },
      "reason": {
        "next": "CodeableConcept"
      },
      "recorded": {
        "parser": "date"
      },
      "signature": {
        "parser": "string"
      },
      "target": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "Provenance.agent": {
    "edges": {
      "display": {
        "parser": "string"
      },
      "reference": {
        "parser": "string"
      },
      "role": {
        "next": "Coding"
      },
      "type": {
        "next": "Coding"
      }
    }
  },
  "Provenance.entity": {
    "edges": {
      "agent": {
        "next": "Provenance.agent"
      },
      "display": {
        "parser": "string"
      },
      "reference": {
        "parser": "string"
      },
      "role": {
        "parser": "string"
      },
      "type": {
        "next": "Coding"
      }
    }
  },
  "Quantity": {
    "edges": {
      "code": {
        "parser": "string"
      },
      "comparator": {
        "parser": "string"
      },
      "system": {
        "parser": "string"
      },
      "units": {
        "parser": "string"
      },
      "value": {
        "parser": "float"
      }
    }
  },
  "Query": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "parser": "string"
      },
      "parameter": {
        "next": "Extension"
      },
      "response": {
        "next": "Query.response"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "Query.response": {
    "edges": {
      "first": {
        "next": "Extension"
      },
      "identifier": {
        "parser": "string"
      },
      "last": {
        "next": "Extension"
      },
      "next": {
        "next": "Extension"
      },
      "outcome": {
        "parser": "string"
      },
      "parameter": {
        "next": "Extension"
      },
      "previous": {
        "next": "Extension"
      },
      "reference": {
        "next": "ResourceReference"
      },
      "total": {
        "parser": "integer"
      }
    }
  },
  "Questionnaire": {
    "edges": {
      "author": {
        "next": "ResourceReference"
      },
      "authored": {
        "parser": "date"
      },
      "contained": {
        "next": "Resource"
      },
      "encounter": {
        "next": "ResourceReference"
      },
      "extension": {
        "next": "Extension"
      },
      "group": {
        "next": "Questionnaire.group"
      },
      "identifier": {
        "next": "Identifier"
      },
      "name": {
        "next": "CodeableConcept"
      },
      "question": {
        "next": "Questionnaire.question"
      },
      "source": {
        "next": "ResourceReference"
      },
      "status": {
        "parser": "string"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "Questionnaire.group": {
    "edges": {
      "group": {
        "next": "Questionnaire.group"
      },
      "header": {
        "parser": "string"
      },
      "name": {
        "next": "CodeableConcept"
      },
      "question": {
        "next": "Questionnaire.question"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "parser": "string"
      }
    }
  },
  "Questionnaire.question": {
    "edges": {
      "answerBoolean": {
        "parser": "boolean"
      },
      "answerDate": {
        "next": "date"
      },
      "answerDateTime": {
        "parser": "date"
      },
      "answerDecimal": {
        "parser": "float"
      },
      "answerInstant": {
        "parser": "date"
      },
      "answerInteger": {
        "parser": "integer"
      },
      "answerString": {
        "parser": "string"
      },
      "choice": {
        "next": "Coding"
      },
      "data": {
        "next": "Questionnaire.question.data"
      },
      "name": {
        "next": "CodeableConcept"
      },
      "optionsResourceReference": {
        "next": "ResourceReference"
      },
      "optionsUri": {
        "parser": "string"
      },
      "remarks": {
        "parser": "string"
      },
      "text": {
        "parser": "string"
      }
    }
  },
  "Range": {
    "edges": {
      "high": {
        "next": "Quantity"
      },
      "low": {
        "next": "Quantity"
      }
    }
  },
  "Ratio": {
    "edges": {
      "denominator": {
        "next": "Quantity"
      },
      "numerator": {
        "next": "Quantity"
      }
    }
  },
  "RelatedPerson": {
    "edges": {
      "address": {
        "next": "Address"
      },
      "contained": {
        "next": "Resource"
      },
      "extension": {
        "next": "Extension"
      },
      "gender": {
        "next": "CodeableConcept"
      },
      "identifier": {
        "next": "Identifier"
      },
      "name": {
        "next": "HumanName"
      },
      "patient": {
        "next": "ResourceReference"
      },
      "photo": {
        "next": "Attachment"
      },
      "relationship": {
        "next": "CodeableConcept"
      },
      "telecom": {
        "next": "Contact"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "ResourceReference": {
    "edges": {
      "display": {
        "parser": "string"
      },
      "reference": {
        "parser": "string"
      },
      "type": {
        "parser": "string"
      }
    }
  },
  "SampledData": {
    "edges": {
      "data": {
        "parser": "string"
      },
      "dimensions": {
        "parser": "integer"
      },
      "factor": {
        "parser": "float"
      },
      "lowerLimit": {
        "parser": "float"
      },
      "origin": {
        "next": "Quantity"
      },
      "period": {
        "parser": "float"
      },
      "upperLimit": {
        "parser": "float"
      }
    }
  },
  "Schedule": {
    "edges": {
      "event": {
        "next": "Period"
      },
      "repeat": {
        "next": "Schedule.repeat"
      }
    }
  },
  "Schedule.repeat": {
    "edges": {
      "count": {
        "parser": "integer"
      },
      "duration": {
        "parser": "float"
      },
      "end": {
        "parser": "date"
      },
      "frequency": {
        "parser": "integer"
      },
      "units": {
        "parser": "string"
      },
      "when": {
        "parser": "string"
      }
    }
  },
  "SecurityEvent": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "event": {
        "next": "SecurityEvent.event"
      },
      "extension": {
        "next": "Extension"
      },
      "object": {
        "next": "SecurityEvent.object"
      },
      "participant": {
        "next": "SecurityEvent.participant"
      },
      "source": {
        "next": "SecurityEvent.source"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "SecurityEvent.event": {
    "edges": {
      "action": {
        "parser": "string"
      },
      "dateTime": {
        "parser": "date"
      },
      "outcome": {
        "parser": "string"
      },
      "outcomeDesc": {
        "parser": "string"
      },
      "subtype": {
        "next": "CodeableConcept"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "SecurityEvent.object": {
    "edges": {
      "detail": {
        "next": "SecurityEvent.object.detail"
      },
      "identifier": {
        "next": "Identifier"
      },
      "lifecycle": {
        "parser": "string"
      },
      "name": {
        "parser": "string"
      },
      "query": {
        "parser": "string"
      },
      "reference": {
        "next": "ResourceReference"
      },
      "role": {
        "parser": "string"
      },
      "sensitivity": {
        "next": "CodeableConcept"
      },
      "type": {
        "parser": "string"
      }
    }
  },
  "SecurityEvent.object.detail": {
    "edges": {
      "type": {
        "parser": "string"
      },
      "value": {
        "parser": "string"
      }
    }
  },
  "SecurityEvent.participant": {
    "edges": {
      "authId": {
        "parser": "string"
      },
      "media": {
        "next": "Coding"
      },
      "name": {
        "parser": "string"
      },
      "network": {
        "next": "SecurityEvent.participant.network"
      },
      "reference": {
        "next": "ResourceReference"
      },
      "requestor": {
        "parser": "boolean"
      },
      "role": {
        "next": "CodeableConcept"
      },
      "userId": {
        "parser": "string"
      }
    }
  },
  "SecurityEvent.participant.network": {
    "edges": {
      "identifier": {
        "parser": "string"
      },
      "type": {
        "parser": "string"
      }
    }
  },
  "SecurityEvent.source": {
    "edges": {
      "identifier": {
        "parser": "string"
      },
      "site": {
        "parser": "string"
      },
      "type": {
        "next": "Coding"
      }
    }
  },
  "Specimen": {
    "edges": {
      "accessionIdentifier": {
        "next": "Identifier"
      },
      "collection": {
        "next": "Specimen.collection"
      },
      "contained": {
        "next": "Resource"
      },
      "container": {
        "next": "Specimen.container"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "receivedTime": {
        "parser": "date"
      },
      "source": {
        "next": "Specimen.source"
      },
      "subject": {
        "next": "ResourceReference"
      },
      "text": {
        "next": "Narrative"
      },
      "treatment": {
        "next": "Specimen.treatment"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "Specimen.collection": {
    "edges": {
      "collectedTime": {
        "parser": "date"
      },
      "collector": {
        "next": "ResourceReference"
      },
      "comment": {
        "parser": "string"
      },
      "method": {
        "next": "CodeableConcept"
      },
      "quantity": {
        "next": "Quantity"
      },
      "sourceSite": {
        "next": "CodeableConcept"
      }
    }
  },
  "Specimen.container": {
    "edges": {
      "additive": {
        "next": "ResourceReference"
      },
      "capacity": {
        "next": "Quantity"
      },
      "description": {
        "parser": "string"
      },
      "identifier": {
        "next": "Identifier"
      },
      "specimenQuantity": {
        "next": "Quantity"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "Specimen.source": {
    "edges": {
      "relationship": {
        "parser": "string"
      },
      "target": {
        "next": "ResourceReference"
      }
    }
  },
  "Specimen.treatment": {
    "edges": {
      "additive": {
        "next": "ResourceReference"
      },
      "description": {
        "parser": "string"
      },
      "procedure": {
        "next": "CodeableConcept"
      }
    }
  },
  "Substance": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "description": {
        "parser": "string"
      },
      "effectiveTime": {
        "next": "Period"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "ingredient": {
        "next": "ResourceReference"
      },
      "name": {
        "parser": "string"
      },
      "quantity": {
        "next": "Quantity"
      },
      "quantityMode": {
        "next": "CodeableConcept"
      },
      "status": {
        "next": "CodeableConcept"
      },
      "text": {
        "next": "Narrative"
      },
      "type": {
        "next": "CodeableConcept"
      }
    }
  },
  "Supply": {
    "edges": {
      "contained": {
        "next": "Resource"
      },
      "dispense": {
        "next": "Supply.dispense"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "next": "Identifier"
      },
      "name": {
        "next": "CodeableConcept"
      },
      "orderedItem": {
        "next": "ResourceReference"
      },
      "patient": {
        "next": "ResourceReference"
      },
      "status": {
        "parser": "string"
      },
      "text": {
        "next": "Narrative"
      }
    }
  },
  "Supply.dispense": {
    "edges": {
      "destination": {
        "next": "ResourceReference"
      },
      "identifier": {
        "next": "Identifier"
      },
      "quantity": {
        "next": "Quantity"
      },
      "receiver": {
        "next": "ResourceReference"
      },
      "status": {
        "parser": "string"
      },
      "suppliedItem": {
        "next": "ResourceReference"
      },
      "supplier": {
        "next": "ResourceReference"
      },
      "type": {
        "next": "CodeableConcept"
      },
      "whenHandedOver": {
        "next": "Period"
      },
      "whenPrepared": {
        "next": "Period"
      }
    }
  },
  "ValueSet": {
    "edges": {
      "compose": {
        "next": "ValueSet.compose"
      },
      "contained": {
        "next": "Resource"
      },
      "copyright": {
        "parser": "string"
      },
      "date": {
        "parser": "date"
      },
      "define": {
        "next": "ValueSet.define"
      },
      "description": {
        "parser": "string"
      },
      "expansion": {
        "next": "ValueSet.expansion"
      },
      "experimental": {
        "parser": "boolean"
      },
      "extension": {
        "next": "Extension"
      },
      "identifier": {
        "parser": "string"
      },
      "name": {
        "parser": "string"
      },
      "publisher": {
        "parser": "string"
      },
      "status": {
        "parser": "string"
      },
      "telecom": {
        "next": "Contact"
      },
      "text": {
        "next": "Narrative"
      },
      "version": {
        "parser": "string"
      }
    }
  },
  "ValueSet.compose": {
    "edges": {
      "exclude": {
        "next": "ValueSet.compose.include"
      },
      "import": {
        "parser": "string"
      },
      "include": {
        "next": "ValueSet.compose.include"
      }
    }
  },
  "ValueSet.compose.include": {
    "edges": {
      "code": {
        "parser": "string"
      },
      "filter": {
        "next": "ValueSet.compose.include.filter"
      },
      "system": {
        "parser": "string"
      },
      "version": {
        "parser": "string"
      }
    }
  },
  "ValueSet.compose.include.filter": {
    "edges": {
      "op": {
        "parser": "string"
      },
      "property": {
        "parser": "string"
      },
      "value": {
        "parser": "string"
      }
    }
  },
  "ValueSet.define": {
    "edges": {
      "caseSensitive": {
        "parser": "boolean"
      },
      "concept": {
        "next": "ValueSet.define.concept"
      },
      "system": {
        "parser": "string"
      }
    }
  },
  "ValueSet.define.concept": {
    "edges": {
      "abstract": {
        "parser": "boolean"
      },
      "code": {
        "parser": "string"
      },
      "concept": {
        "next": "ValueSet.define.concept"
      },
      "definition": {
        "parser": "string"
      },
      "display": {
        "parser": "string"
      }
    }
  },
  "ValueSet.expansion": {
    "edges": {
      "contains": {
        "next": "ValueSet.expansion.contains"
      },
      "timestamp": {
        "parser": "date"
      }
    }
  },
  "ValueSet.expansion.contains": {
    "edges": {
      "code": {
        "parser": "string"
      },
      "contains": {
        "next": "ValueSet.expansion.contains"
      },
      "display": {
        "parser": "string"
      },
      "system": {
        "parser": "string"
      }
    }
  }
};

});
