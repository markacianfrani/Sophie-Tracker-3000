<div class="modal fade" id="medicineModal" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <div class="row medicine-types">
                    @foreach ($medicineTypes as $medicineType)
                    <button type="button" class="btn btn-lg btn-success" data-value="{{ $medicineType->subtype }}">
                        <i class="{{ iconForMedicine($medicineType->subtype ) }}"></i> {{ $medicineType->subtype }}
                    </button>
                    @endforeach

                    <button type="button" class="btn btn-lg btn-success" data-value="Other">
                        <i class="icon-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>