import { observer } from "mobx-react";
import React, { memo, useCallback } from "react";
import { useInstance } from "react-ioc";
import { ItemNameDict } from "../models/floorplan-entities/item.dict";
import { ItemEnum } from "../models/floorplan-entities/item.enum";
import { BlueprintService } from "../services/blueprint.service";
import InlineTextEdit from "./inline-text-edit";
import InlineTextareaEdit from "./inline-textarea-edit";
import ListItem from "./list-item";

const ItemProperty = () => {
  const blueprintService = useInstance(BlueprintService);

  const onChangeItemName = useCallback((value: string) => {
    blueprintService.selected.name = value;
    blueprintService.applyChanges();
  }, []);

  const onChangeItemDescription = useCallback((value: string) => {
    blueprintService.selected.description = value;
    blueprintService.applyChanges();
  }, []);

  return (
    <>
      <ListItem borderRadius="5px" isHeader>
        {ItemNameDict[blueprintService.selected.type as ItemEnum]}
      </ListItem>
      <ListItem borderRadius="5px" isField>
        <InlineTextEdit
          placeholder="Write Name..."
          value={blueprintService.selected.name}
          onChange={onChangeItemName}
        />
      </ListItem>
      <ListItem borderRadius="5px" isHeader>
        Description
      </ListItem>
      <ListItem borderRadius="5px" isField>
        <InlineTextareaEdit
          borderRadius="0 0 5px 5px"
          placeholder="Write Description..."
          value={blueprintService.selected.description}
          onChange={onChangeItemDescription}
        />
      </ListItem>
    </>
  );
};

export default memo(observer(ItemProperty));
