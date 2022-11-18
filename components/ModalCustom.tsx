import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "./Themed";
import { Modal, VStack, HStack, Radio,Button} from "native-base";

export default function ModalCustom({name, context, setter}) {
  return (
    <Modal isOpen={context}  onClose={() => setter(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>{name}</Modal.Header>
          <Modal.Footer>
            <Button flex="1" onPress={() => {
            setter(false);
          }}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
  )
}