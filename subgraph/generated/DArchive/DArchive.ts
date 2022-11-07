// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ArchiveAdded extends ethereum.Event {
  get params(): ArchiveAdded__Params {
    return new ArchiveAdded__Params(this);
  }
}

export class ArchiveAdded__Params {
  _event: ArchiveAdded;

  constructor(event: ArchiveAdded) {
    this._event = event;
  }

  get contentID(): string {
    return this._event.parameters[0].value.toString();
  }

  get contentURL(): string {
    return this._event.parameters[1].value.toString();
  }

  get title(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class DArchive extends ethereum.SmartContract {
  static bind(address: Address): DArchive {
    return new DArchive("DArchive", address);
  }

  archiveAdded(param0: string): boolean {
    let result = super.call("archiveAdded", "archiveAdded(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBoolean();
  }

  try_archiveAdded(param0: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("archiveAdded", "archiveAdded(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getTrustedForwarder(): Address {
    let result = super.call(
      "getTrustedForwarder",
      "getTrustedForwarder():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getTrustedForwarder(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTrustedForwarder",
      "getTrustedForwarder():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isTrustedForwarder(forwarder: Address): boolean {
    let result = super.call(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );

    return result[0].toBoolean();
  }

  try_isTrustedForwarder(forwarder: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supporterNFT(): Address {
    let result = super.call("supporterNFT", "supporterNFT():(address)", []);

    return result[0].toAddress();
  }

  try_supporterNFT(): ethereum.CallResult<Address> {
    let result = super.tryCall("supporterNFT", "supporterNFT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  versionRecipient(): string {
    let result = super.call(
      "versionRecipient",
      "versionRecipient():(string)",
      []
    );

    return result[0].toString();
  }

  try_versionRecipient(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "versionRecipient",
      "versionRecipient():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _trustedForwarder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get supporterNFTAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddArchiveCall extends ethereum.Call {
  get inputs(): AddArchiveCall__Inputs {
    return new AddArchiveCall__Inputs(this);
  }

  get outputs(): AddArchiveCall__Outputs {
    return new AddArchiveCall__Outputs(this);
  }
}

export class AddArchiveCall__Inputs {
  _call: AddArchiveCall;

  constructor(call: AddArchiveCall) {
    this._call = call;
  }

  get contentID(): string {
    return this._call.inputValues[0].value.toString();
  }

  get contentURL(): string {
    return this._call.inputValues[1].value.toString();
  }

  get title(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class AddArchiveCall__Outputs {
  _call: AddArchiveCall;

  constructor(call: AddArchiveCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RevokeCall extends ethereum.Call {
  get inputs(): RevokeCall__Inputs {
    return new RevokeCall__Inputs(this);
  }

  get outputs(): RevokeCall__Outputs {
    return new RevokeCall__Outputs(this);
  }
}

export class RevokeCall__Inputs {
  _call: RevokeCall;

  constructor(call: RevokeCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RevokeCall__Outputs {
  _call: RevokeCall;

  constructor(call: RevokeCall) {
    this._call = call;
  }
}

export class SetSupporterTokenURICall extends ethereum.Call {
  get inputs(): SetSupporterTokenURICall__Inputs {
    return new SetSupporterTokenURICall__Inputs(this);
  }

  get outputs(): SetSupporterTokenURICall__Outputs {
    return new SetSupporterTokenURICall__Outputs(this);
  }
}

export class SetSupporterTokenURICall__Inputs {
  _call: SetSupporterTokenURICall;

  constructor(call: SetSupporterTokenURICall) {
    this._call = call;
  }

  get uri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetSupporterTokenURICall__Outputs {
  _call: SetSupporterTokenURICall;

  constructor(call: SetSupporterTokenURICall) {
    this._call = call;
  }
}

export class SetTrustedForwarderCall extends ethereum.Call {
  get inputs(): SetTrustedForwarderCall__Inputs {
    return new SetTrustedForwarderCall__Inputs(this);
  }

  get outputs(): SetTrustedForwarderCall__Outputs {
    return new SetTrustedForwarderCall__Outputs(this);
  }
}

export class SetTrustedForwarderCall__Inputs {
  _call: SetTrustedForwarderCall;

  constructor(call: SetTrustedForwarderCall) {
    this._call = call;
  }

  get _trustedForwarder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTrustedForwarderCall__Outputs {
  _call: SetTrustedForwarderCall;

  constructor(call: SetTrustedForwarderCall) {
    this._call = call;
  }
}

export class SupportCall extends ethereum.Call {
  get inputs(): SupportCall__Inputs {
    return new SupportCall__Inputs(this);
  }

  get outputs(): SupportCall__Outputs {
    return new SupportCall__Outputs(this);
  }
}

export class SupportCall__Inputs {
  _call: SupportCall;

  constructor(call: SupportCall) {
    this._call = call;
  }
}

export class SupportCall__Outputs {
  _call: SupportCall;

  constructor(call: SupportCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}