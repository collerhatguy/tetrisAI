import { Injectable, OnInit } from '@angular/core';
import { tap, map, pairwise } from 'rxjs';
import { BlockMovementService } from 'src/app/services/block-movement/block-movement.service';
import { Store } from 'src/app/utils/store';
import { BoardService } from '../board-service/board.service';
import { Block } from '../board-service/models';
import { PlayerPieceService } from '../player-piece/player-piece.service';

@Injectable({
  providedIn: 'root',
})
export class ShadowPieceService extends Store<Block> {
  constructor(
    private board: BoardService,
    private playerPiece: PlayerPieceService,
    private blockMovement: BlockMovementService
  ) {
    super([]);
  }

  private getLowestPoint(block: Block): Block {
    const newBlock = this.blockMovement.getFuturePosition('down', block);
    const valid = !this.blockMovement.isInvalidMove(
      block,
      newBlock,
      this.board.value
    );
    return valid ? this.getLowestPoint(newBlock) : block;
  }

  trackPlayerPiece = this.playerPiece.value$.pipe(
    map((block) => {
      if (!block.length) return block;
      return this.getLowestPoint(block);
    }),
    pairwise(),
    tap(([prev, current]) => {
      this.board.clearPiece(prev);
      this.board.setShadowPiece(current);
    })
  );
}
