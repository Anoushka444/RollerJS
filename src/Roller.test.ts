export class Roller {
    private _distribution: Map<number, number>;
    private _last: number;
    private _faces: number;

    constructor(faces: number) {
        this._faces = faces >= 2 ? faces : 6;
        this._distribution = new Map<number, number>();
        for (let i = 1; i <= this._faces; i++) {
            this._distribution.set(i, 0);
        }
        this._last = 0;
    }

    roll(value: number): number {
        if (value >= 1 && value <= this._faces) {
            this._last = value;
            this._distribution.set(value, this._distribution.get(value)! + 1);
        } else {
            value = 0;
        }
        return value;
    }

    last(): number {
        return this._last;
    }

    distribution(): Map<number, number> {
        return new Map(this._distribution);
    }

    getDescription(): string {
        return `This roller has ${this._faces} faces.`;
    }
}
