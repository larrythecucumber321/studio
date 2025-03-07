/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace ConvexStakingWrapper {
  export type EarnedDataStruct = {
    token: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type EarnedDataStructOutput = [string, BigNumber] & {
    token: string;
    amount: BigNumber;
  };
}

export interface AbracadabraConvexWrapperInterface extends utils.Interface {
  functions: {
    'addRewards()': FunctionFragment;
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'cauldron()': FunctionFragment;
    'collateralVault()': FunctionFragment;
    'convexBooster()': FunctionFragment;
    'convexPool()': FunctionFragment;
    'convexPoolId()': FunctionFragment;
    'convexToken()': FunctionFragment;
    'crv()': FunctionFragment;
    'curveToken()': FunctionFragment;
    'cvx()': FunctionFragment;
    'cvx_claimable_reward(address)': FunctionFragment;
    'cvx_reward_integral()': FunctionFragment;
    'cvx_reward_integral_for(address)': FunctionFragment;
    'cvx_reward_remaining()': FunctionFragment;
    'decimals()': FunctionFragment;
    'decreaseAllowance(address,uint256)': FunctionFragment;
    'deposit(uint256,address)': FunctionFragment;
    'earned(address)': FunctionFragment;
    'getReward(address)': FunctionFragment;
    'increaseAllowance(address,uint256)': FunctionFragment;
    'isShutdown()': FunctionFragment;
    'name()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rewardLength()': FunctionFragment;
    'rewards(uint256)': FunctionFragment;
    'setApprovals()': FunctionFragment;
    'setCauldron(address)': FunctionFragment;
    'shutdown()': FunctionFragment;
    'stake(uint256,address)': FunctionFragment;
    'symbol()': FunctionFragment;
    'totalBalanceOf(address)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'user_checkpoint(address[2])': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
    'withdrawAndUnwrap(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addRewards'
      | 'allowance'
      | 'approve'
      | 'balanceOf'
      | 'cauldron'
      | 'collateralVault'
      | 'convexBooster'
      | 'convexPool'
      | 'convexPoolId'
      | 'convexToken'
      | 'crv'
      | 'curveToken'
      | 'cvx'
      | 'cvx_claimable_reward'
      | 'cvx_reward_integral'
      | 'cvx_reward_integral_for'
      | 'cvx_reward_remaining'
      | 'decimals'
      | 'decreaseAllowance'
      | 'deposit'
      | 'earned'
      | 'getReward'
      | 'increaseAllowance'
      | 'isShutdown'
      | 'name'
      | 'owner'
      | 'renounceOwnership'
      | 'rewardLength'
      | 'rewards'
      | 'setApprovals'
      | 'setCauldron'
      | 'shutdown'
      | 'stake'
      | 'symbol'
      | 'totalBalanceOf'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom'
      | 'transferOwnership'
      | 'user_checkpoint'
      | 'withdraw'
      | 'withdrawAndUnwrap',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'addRewards', values?: undefined): string;
  encodeFunctionData(functionFragment: 'allowance', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'cauldron', values?: undefined): string;
  encodeFunctionData(functionFragment: 'collateralVault', values?: undefined): string;
  encodeFunctionData(functionFragment: 'convexBooster', values?: undefined): string;
  encodeFunctionData(functionFragment: 'convexPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'convexPoolId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'convexToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'crv', values?: undefined): string;
  encodeFunctionData(functionFragment: 'curveToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cvx', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cvx_claimable_reward', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'cvx_reward_integral', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cvx_reward_integral_for', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'cvx_reward_remaining', values?: undefined): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'earned', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getReward', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'isShutdown', values?: undefined): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardLength', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewards', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'setApprovals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setCauldron', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'shutdown', values?: undefined): string;
  encodeFunctionData(functionFragment: 'stake', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalBalanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'user_checkpoint',
    values: [[PromiseOrValue<string>, PromiseOrValue<string>]],
  ): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'withdrawAndUnwrap', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'addRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cauldron', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'collateralVault', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'convexBooster', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'convexPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'convexPoolId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'convexToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'crv', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'curveToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cvx', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cvx_claimable_reward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cvx_reward_integral', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cvx_reward_integral_for', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cvx_reward_remaining', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decreaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'earned', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isShutdown', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setApprovals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setCauldron', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'shutdown', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalBalanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'user_checkpoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawAndUnwrap', data: BytesLike): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'Deposited(address,address,uint256,bool)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
    'Withdrawn(address,uint256,bool)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Deposited'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdrawn'): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface DepositedEventObject {
  _user: string;
  _account: string;
  _amount: BigNumber;
  _wrapped: boolean;
}
export type DepositedEvent = TypedEvent<[string, string, BigNumber, boolean], DepositedEventObject>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface WithdrawnEventObject {
  _user: string;
  _amount: BigNumber;
  _unwrapped: boolean;
}
export type WithdrawnEvent = TypedEvent<[string, BigNumber, boolean], WithdrawnEventObject>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface AbracadabraConvexWrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AbracadabraConvexWrapperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    cauldron(overrides?: CallOverrides): Promise<[string]>;

    collateralVault(overrides?: CallOverrides): Promise<[string]>;

    convexBooster(overrides?: CallOverrides): Promise<[string]>;

    convexPool(overrides?: CallOverrides): Promise<[string]>;

    convexPoolId(overrides?: CallOverrides): Promise<[BigNumber]>;

    convexToken(overrides?: CallOverrides): Promise<[string]>;

    crv(overrides?: CallOverrides): Promise<[string]>;

    curveToken(overrides?: CallOverrides): Promise<[string]>;

    cvx(overrides?: CallOverrides): Promise<[string]>;

    cvx_claimable_reward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    cvx_reward_integral(overrides?: CallOverrides): Promise<[BigNumber]>;

    cvx_reward_integral_for(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    cvx_reward_remaining(overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    earned(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [ConvexStakingWrapper.EarnedDataStructOutput[]] & {
        claimable: ConvexStakingWrapper.EarnedDataStructOutput[];
      }
    >;

    getReward(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    isShutdown(overrides?: CallOverrides): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    rewardLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewards(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, BigNumber, BigNumber] & {
        reward_token: string;
        reward_pool: string;
        reward_integral: BigNumber;
        reward_remaining: BigNumber;
      }
    >;

    setApprovals(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    setCauldron(
      _cauldron: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    shutdown(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    user_checkpoint(
      _accounts: [PromiseOrValue<string>, PromiseOrValue<string>],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdrawAndUnwrap(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  addRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  cauldron(overrides?: CallOverrides): Promise<string>;

  collateralVault(overrides?: CallOverrides): Promise<string>;

  convexBooster(overrides?: CallOverrides): Promise<string>;

  convexPool(overrides?: CallOverrides): Promise<string>;

  convexPoolId(overrides?: CallOverrides): Promise<BigNumber>;

  convexToken(overrides?: CallOverrides): Promise<string>;

  crv(overrides?: CallOverrides): Promise<string>;

  curveToken(overrides?: CallOverrides): Promise<string>;

  cvx(overrides?: CallOverrides): Promise<string>;

  cvx_claimable_reward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  cvx_reward_integral(overrides?: CallOverrides): Promise<BigNumber>;

  cvx_reward_integral_for(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  cvx_reward_remaining(overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: PromiseOrValue<string>,
    subtractedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _amount: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  earned(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<ConvexStakingWrapper.EarnedDataStructOutput[]>;

  getReward(
    _account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: PromiseOrValue<string>,
    addedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  isShutdown(overrides?: CallOverrides): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  rewardLength(overrides?: CallOverrides): Promise<BigNumber>;

  rewards(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [string, string, BigNumber, BigNumber] & {
      reward_token: string;
      reward_pool: string;
      reward_integral: BigNumber;
      reward_remaining: BigNumber;
    }
  >;

  setApprovals(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  setCauldron(
    _cauldron: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  shutdown(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  stake(
    _amount: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  user_checkpoint(
    _accounts: [PromiseOrValue<string>, PromiseOrValue<string>],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdraw(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdrawAndUnwrap(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    addRewards(overrides?: CallOverrides): Promise<void>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    cauldron(overrides?: CallOverrides): Promise<string>;

    collateralVault(overrides?: CallOverrides): Promise<string>;

    convexBooster(overrides?: CallOverrides): Promise<string>;

    convexPool(overrides?: CallOverrides): Promise<string>;

    convexPoolId(overrides?: CallOverrides): Promise<BigNumber>;

    convexToken(overrides?: CallOverrides): Promise<string>;

    crv(overrides?: CallOverrides): Promise<string>;

    curveToken(overrides?: CallOverrides): Promise<string>;

    cvx(overrides?: CallOverrides): Promise<string>;

    cvx_claimable_reward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    cvx_reward_integral(overrides?: CallOverrides): Promise<BigNumber>;

    cvx_reward_integral_for(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    cvx_reward_remaining(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    earned(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<ConvexStakingWrapper.EarnedDataStructOutput[]>;

    getReward(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    isShutdown(overrides?: CallOverrides): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardLength(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, BigNumber, BigNumber] & {
        reward_token: string;
        reward_pool: string;
        reward_integral: BigNumber;
        reward_remaining: BigNumber;
      }
    >;

    setApprovals(overrides?: CallOverrides): Promise<void>;

    setCauldron(_cauldron: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    shutdown(overrides?: CallOverrides): Promise<void>;

    stake(_amount: PromiseOrValue<BigNumberish>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    user_checkpoint(
      _accounts: [PromiseOrValue<string>, PromiseOrValue<string>],
      overrides?: CallOverrides,
    ): Promise<boolean>;

    withdraw(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    withdrawAndUnwrap(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;

    'Deposited(address,address,uint256,bool)'(
      _user?: PromiseOrValue<string> | null,
      _account?: PromiseOrValue<string> | null,
      _amount?: null,
      _wrapped?: null,
    ): DepositedEventFilter;
    Deposited(
      _user?: PromiseOrValue<string> | null,
      _account?: PromiseOrValue<string> | null,
      _amount?: null,
      _wrapped?: null,
    ): DepositedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;

    'Withdrawn(address,uint256,bool)'(
      _user?: PromiseOrValue<string> | null,
      _amount?: null,
      _unwrapped?: null,
    ): WithdrawnEventFilter;
    Withdrawn(_user?: PromiseOrValue<string> | null, _amount?: null, _unwrapped?: null): WithdrawnEventFilter;
  };

  estimateGas: {
    addRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    cauldron(overrides?: CallOverrides): Promise<BigNumber>;

    collateralVault(overrides?: CallOverrides): Promise<BigNumber>;

    convexBooster(overrides?: CallOverrides): Promise<BigNumber>;

    convexPool(overrides?: CallOverrides): Promise<BigNumber>;

    convexPoolId(overrides?: CallOverrides): Promise<BigNumber>;

    convexToken(overrides?: CallOverrides): Promise<BigNumber>;

    crv(overrides?: CallOverrides): Promise<BigNumber>;

    curveToken(overrides?: CallOverrides): Promise<BigNumber>;

    cvx(overrides?: CallOverrides): Promise<BigNumber>;

    cvx_claimable_reward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    cvx_reward_integral(overrides?: CallOverrides): Promise<BigNumber>;

    cvx_reward_integral_for(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    cvx_reward_remaining(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    earned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    isShutdown(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    rewardLength(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    setApprovals(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    setCauldron(
      _cauldron: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    shutdown(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    user_checkpoint(
      _accounts: [PromiseOrValue<string>, PromiseOrValue<string>],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdrawAndUnwrap(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRewards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cauldron(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collateralVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    convexBooster(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    convexPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    convexPoolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    convexToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    crv(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    curveToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvx_claimable_reward(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvx_reward_integral(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvx_reward_integral_for(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvx_reward_remaining(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    earned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReward(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    isShutdown(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    rewardLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewards(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setApprovals(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    setCauldron(
      _cauldron: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    shutdown(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    user_checkpoint(
      _accounts: [PromiseOrValue<string>, PromiseOrValue<string>],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdrawAndUnwrap(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
